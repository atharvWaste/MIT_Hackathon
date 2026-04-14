const { signIn, signUp } = require("../services/auth.services"); 
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
      maxAge: 7 * 24 * 60 * 60 * 1000, 
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


  async function signUpController(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const result = await signUp(name, email, password, { User });
 
    res.status(201).json({
      success: true,
      message: "Account created successfully. You can now sign in.",
      user: result.user,
    });
  } catch (err) {
    next(err);
  }
}
module.exports = { signInController , signUpController };