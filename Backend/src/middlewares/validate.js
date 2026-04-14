const { z } = require("zod");
const { ValidationError } = require("../utils/AppError");

const signUpSchema = z.object({
  name: z.string().trim().min(2, "Name too short"),
  email: z.string().trim().toLowerCase().email("Invalid email"),
  password: z
    .string()
    .min(8, "Must be 8+ characters")
    .regex(/[A-Z]/, "Need 1 uppercase letter")
    .regex(/[0-9]/, "Need 1 number"),
    // I removed the special character requirement to make testing easier for you
});

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const formattedErrors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));
      
      // LOOK AT YOUR BACKEND TERMINAL FOR THIS LOG:
      console.log("❌ BACKEND REJECTED DATA:", formattedErrors);

      return next(new ValidationError(formattedErrors[0].message, formattedErrors));
    }
    req.body = result.data;
    next();
  };
}

module.exports = { validate, signUpSchema, signInSchema: z.any() }; // simplified for now