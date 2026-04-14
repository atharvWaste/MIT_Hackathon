const rateLimit = require("express-rate-limit");
const { AppError } = require("../utils/AppError");

/**
 * Strict rate limiter for auth endpoints.
 * 10 attempts per IP per 15-minute window.
 *
 * For high-scale apps swap the default MemoryStore with
 * a Redis store (e.g. `rate-limit-redis`) so limits are
 * shared across multiple server instances.
 */
const signInLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,     // Return RateLimit-* headers (RFC 6585)
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Only count failed (4xx/5xx) responses

  handler(req, res, next) {
    next(
      new AppError(
        "Too many sign-in attempts from this IP. Please try again after 15 minutes.",
        429,
        "RATE_LIMITED"
      )
    );
  },
});

module.exports = { signInLimiter };