const express = require("express");
const { signInController } = require("../controllers/auth.controllers.js");
const { validate, signInSchema } = require("../middlewares/validate.js");
const { signInLimiter } = require("../middlewares/rateLimiter.js");

const router = express.Router();

// POST /api/auth/signin
// Pipeline: rate limit → validate → controller


router.post(
  "/login", // Changed from /signin to /login to match your frontend fetch
  signInLimiter,
  validate(signInSchema),
  signInController
);

module.exports = router;