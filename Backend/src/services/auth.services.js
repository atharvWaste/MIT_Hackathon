const bcrypt = require("bcrypt");
const { signAccessToken, signRefreshToken } = require("../utils/jwt");
const { AppError } = require("../utils/AppError");

// ── Constants ────────────────────────────────────────────────────────────────
const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Always run bcrypt.compare even when the user isn't found.
 * This prevents timing attacks that let attackers enumerate valid emails.
 */
const DUMMY_HASH = "$2b$12$invalidhashusedtopreventtimingattacksonnonexistentusers";

async function safeCompare(plaintext, hash) {
  return bcrypt.compare(plaintext, hash ?? DUMMY_HASH);
}

// ── Service ──────────────────────────────────────────────────────────────────

/**
 * @param {string} email
 * @param {string} password
 * @param {object} db  - your DB client / ORM (Mongoose model, Prisma, etc.)
 *                       Injected so the service stays testable.
 *
 * Returns { accessToken, refreshToken, user }
 */
async function signIn(email, password, db) {
  // 1. Fetch user (never reveal whether email exists)
  const user = await db.User.findOne({ email }).select(
    "+password +failedLoginAttempts +lockUntil +refreshTokens"
  );

  const passwordMatch = await safeCompare(password, user?.password);

  // 2. Check account lock BEFORE giving any password feedback
  if (user && user.lockUntil && user.lockUntil > Date.now()) {
    const remainingMs = user.lockUntil - Date.now();
    const remainingMin = Math.ceil(remainingMs / 60000);
    throw new AppError(
      `Account is locked. Try again in ${remainingMin} minute(s).`,
      403,
      "ACCOUNT_LOCKED"
    );
  }

  // 3. Wrong credentials
  if (!user || !passwordMatch) {
    if (user) {
      // Increment failed attempts and maybe lock the account
      user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;

      if (user.failedLoginAttempts >= MAX_FAILED_ATTEMPTS) {
        user.lockUntil = new Date(Date.now() + LOCK_DURATION_MS);
        user.failedLoginAttempts = 0; // reset for next window
      }

      await user.save();
    }

    // Same message regardless of whether email exists
    throw new AppError("Invalid email or password", 401, "INVALID_CREDENTIALS");
  }

  // 4. Check if email is verified (if your app requires it)
  if (!user.isEmailVerified) {
    throw new AppError(
      "Please verify your email before signing in.",
      403,
      "EMAIL_NOT_VERIFIED"
    );
  }

  // 5. Successful login — reset lockout state
  user.failedLoginAttempts = 0;
  user.lockUntil = null;
  user.lastLoginAt = new Date();

  // 6. Issue tokens
  const tokenPayload = { sub: user._id.toString(), role: user.role };
  const accessToken  = signAccessToken(tokenPayload);
  const refreshToken = signRefreshToken({ sub: user._id.toString() });

  // 7. Persist refresh token (hashed) — enables server-side revocation
  const hashedRefresh = await bcrypt.hash(refreshToken, 10);
  user.refreshTokens = [
    ...(user.refreshTokens || []).slice(-4), // keep last 4 (multi-device)
    { token: hashedRefresh, createdAt: new Date() },
  ];

  await user.save();

  // 8. Return — never expose the full user document
  return {
    accessToken,
    refreshToken,
    user: {
      id:    user._id,
      name:  user.name,
      email: user.email,
      role:  user.role,
    },
  };
}

module.exports = { signIn };