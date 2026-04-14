const jwt = require("jsonwebtoken");
const { AppError } = require("./AppError");

const ACCESS_SECRET  = process.env.JWT_ACCESS_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

if (!ACCESS_SECRET || !REFRESH_SECRET) {
  throw new Error("JWT secrets are not set in environment variables");
}

/**
 * Sign an access token (short-lived).
 * Payload is intentionally minimal — never put sensitive data here.
 */
function signAccessToken(payload) {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    issuer: process.env.JWT_ISSUER || "myapp",
    audience: process.env.JWT_AUDIENCE || "myapp-client",
  });
}

/**
 * Sign a refresh token (long-lived).
 * Only contains the userId — the minimum needed to issue a new access token.
 */
function signRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    issuer: process.env.JWT_ISSUER || "myapp",
    audience: process.env.JWT_AUDIENCE || "myapp-client",
  });
}

function verifyAccessToken(token) {
  try {
    return jwt.verify(token, ACCESS_SECRET, {
      issuer: process.env.JWT_ISSUER || "myapp",
      audience: process.env.JWT_AUDIENCE || "myapp-client",
    });
  } catch (err) {
    if (err.name === "TokenExpiredError") throw new AppError("Access token expired", 401, "TOKEN_EXPIRED");
    throw new AppError("Invalid access token", 401, "TOKEN_INVALID");
  }
}

function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, REFRESH_SECRET, {
      issuer: process.env.JWT_ISSUER || "myapp",
      audience: process.env.JWT_AUDIENCE || "myapp-client",
    });
  } catch (err) {
    if (err.name === "TokenExpiredError") throw new AppError("Refresh token expired, please login again", 401, "REFRESH_TOKEN_EXPIRED");
    throw new AppError("Invalid refresh token", 401, "REFRESH_TOKEN_INVALID");
  }
}

module.exports = { signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken };