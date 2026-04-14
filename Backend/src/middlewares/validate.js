const { z } = require("zod");
const { ValidationError } = require("../utils/AppError");

// ── Schema ──────────────────────────────────────────────────────────────────
const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .toLowerCase()
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password cannot be empty"),
});

// ── Middleware factory ───────────────────────────────────────────────────────
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return next(new ValidationError(errors));
    }

    // Overwrite req.body with the parsed (sanitised) data
    req.body = result.data;
    next();
  };
}

module.exports = { validate, signInSchema };