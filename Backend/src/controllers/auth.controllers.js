const { signIn } = require("../services/auth.services.js");

// ── Cookie options ────────────────────────────────────────────────────────────
const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,   // Not accessible via JS (XSS protection)
  secure: process.env.NODE_ENV === "production", // HTTPS only in prod
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
  path: "/api/auth", // Scoped — refresh token cookie only sent to auth routes
};

// ── Controller ────────────────────────────────────────────────────────────────

/**
 * POST /api/auth/signin
 *
 * Returns the access token in the response body (for the client to store
 * in memory — NOT localStorage). The refresh token goes into an
 * httpOnly cookie so JS can't touch it.
 */
async function signInController(req, res, next) {
  try {
    const { email, password } = req.body; // already validated & sanitised
    const db = req.app.get("db");         // db injected via app.set("db", ...)

    const { accessToken, refreshToken, user } = await signIn(email, password, db);

    // Set refresh token as httpOnly cookie
    res.cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTIONS);

    return res.status(200).json({
      success: true,
      message: "Signed in successfully",
      data: {
        accessToken,
        user,
      },
    });
  } catch (err) {
    next(err); // Passes to global error handler
  }
}

module.exports = { signInController };