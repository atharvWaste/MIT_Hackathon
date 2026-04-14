const express = require("express");
// Added signUpController here
const { signInController, signUpController } = require("../controllers/auth.controllers.js"); 
// Added signUpSchema here
const { validate, signInSchema, signUpSchema } = require("../middlewares/validate.js"); 
const { signInLimiter } = require("../middlewares/rateLimiter.js");

const router = express.Router();

router.post(
  "/login",
  signInLimiter,
  validate(signInSchema),
  signInController
);

router.post(
  "/signup", 
  validate(signUpSchema), 
  signUpController
);

module.exports = router;