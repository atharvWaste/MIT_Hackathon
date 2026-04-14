const { AppError, ValidationError } = require("../utils/AppError");

/**
 * Central error handler — must be registered LAST in Express middleware chain.
 * All errors reach here via next(err).
 */
function globalErrorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  // Log everything (use a real logger like Winston/Pino in prod)
  console.error({
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    error: err.message,
    stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
  });

  // ── Validation errors ──────────────────────────────────────────────────────
  if (err instanceof ValidationError) {
    return res.status(422).json({
      success: false,
      code: err.code,
      message: err.message,
      errors: err.errors,
    });
  }

  // ── Operational errors (AppError) ──────────────────────────────────────────
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      code: err.code,
      message: err.message,
    });
  }

  // ── Mongoose duplicate key ─────────────────────────────────────────────────
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      success: false,
      code: "DUPLICATE_KEY",
      message: `${field} is already in use.`,
    });
  }

  // ── JWT errors (if not caught in utils/jwt.js) ────────────────────────────
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      code: "TOKEN_INVALID",
      message: "Authentication failed. Please sign in again.",
    });
  }

  // ── Unknown / programmer errors — don't leak internals ────────────────────
  return res.status(500).json({
    success: false,
    code: "INTERNAL_ERROR",
    message: "Something went wrong. Please try again later.",
  });
}

module.exports = { globalErrorHandler };