import {
  forgotPassword,
  login,
  me,
  resetPassword,
  sendAgainVerification,
  signup,
  updateProfile,
  verifyEmail,
  verifyLink,
} from "../controllers/auth.controller";
import express from "express";
import {
  forgotPasswordValidation,
  loggedIn,
  loginValidation,
  resetPasswordValidation,
  tokenValidation,
} from "../validations/auth.validation";

const router = express.Router();
router.post("/signup", loginValidation, signup);
router.post("/login", loginValidation, login);
router.post(
  "/sendForgotPasswordLink",
  forgotPasswordValidation,
  forgotPassword
);
router.get("/verifyLink", tokenValidation, verifyLink);
router.get("/verifyEmail", tokenValidation, verifyEmail);
router.put("/resetPassword", resetPasswordValidation, resetPassword);
router.get("/me", loggedIn, me);
router.put("/me", loggedIn, updateProfile);
router.get("/resendVerification", loggedIn, sendAgainVerification);

export default router;
