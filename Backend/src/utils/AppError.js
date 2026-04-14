class AppError extends Error {
  constructor(message, statusCode, code = null) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;             // machine-readable e.g. "INVALID_CREDENTIALS"
    this.isOperational = true;    // distinguish from programmer errors
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(errors) {
    super("Validation failed", 422, "VALIDATION_ERROR");
    this.errors = errors;         // array of field-level errors
  }
}

module.exports = { AppError, ValidationError };