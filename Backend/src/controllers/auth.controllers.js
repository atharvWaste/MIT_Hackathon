const { signIn } = require("../services/auth.services");
const User = require("../models/User");

async function signInController(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await signIn(email, password, { User });

    // Send refresh token as httpOnly cookie (more secure)
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { signInController };