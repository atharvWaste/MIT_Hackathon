const bcrypt = require("bcrypt");
const { signAccessToken, signRefreshToken } = require("../utils/jwt");
const { AppError } = require("../utils/AppError");

// ── Constants ────────────────────────────────────────────────────────────────
const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000;

// ── Helpers ──────────────────────────────────────────────────────────────────
const DUMMY_HASH = "$2b$12$invalidhashusedtopreventtimingattacksonnonexistentusers";

async function safeCompare(plaintext, hash) {
  return bcrypt.compare(plaintext, hash ?? DUMMY_HASH);
}

// ── Sign In ──────────────────────────────────────────────────────────────────
async function signIn(email, password, db) {
  const user = await db.User.findOne({ email }).select(
    "+password +failedLoginAttempts +lockUntil +refreshTokens"
  );

  const passwordMatch = await safeCompare(password, user?.password);

  if (user && user.lockUntil && user.lockUntil > Date.now()) {
    const remainingMin = Math.ceil((user.lockUntil - Date.now()) / 60000);
    throw new AppError(
      `Account is locked. Try again in ${remainingMin} minute(s).`,
      403,
      "ACCOUNT_LOCKED"
    );
  }

  if (!user || !passwordMatch) {
    if (user) {
      user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;
      if (user.failedLoginAttempts >= MAX_FAILED_ATTEMPTS) {
        user.lockUntil = new Date(Date.now() + LOCK_DURATION_MS);
        user.failedLoginAttempts = 0;
      }
      await user.save();
    }
    throw new AppError("Invalid email or password", 401, "INVALID_CREDENTIALS");
  }

  if (!user.isEmailVerified) {
    throw new AppError(
      "Please verify your email before signing in.",
      403,
      "EMAIL_NOT_VERIFIED"
    );
  }

  user.failedLoginAttempts = 0;
  user.lockUntil = null;
  user.lastLoginAt = new Date();

  const tokenPayload = { sub: user._id.toString(), role: user.role };
  const accessToken  = signAccessToken(tokenPayload);
  const refreshToken = signRefreshToken({ sub: user._id.toString() });

  const hashedRefresh = await bcrypt.hash(refreshToken, 10);
  user.refreshTokens = [
    ...(user.refreshTokens || []).slice(-4),
    { token: hashedRefresh, createdAt: new Date() },
  ];

  await user.save();

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

// ── Sign Up ──────────────────────────────────────────────────────────────────
async function signUp(name, email, password, db) {
  const existing = await db.User.findOne({ email });
  if (existing) {
    throw new AppError("Email is already in use.", 409, "EMAIL_TAKEN");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await db.User.create({
    name,
    email,
    password: hashedPassword,
    isEmailVerified: true,
  });

  return {
    user: {
      id:    user._id,
      name:  user.name,
      email: user.email,
      role:  user.role,
    },
  };
}

module.exports = { signIn, signUp };