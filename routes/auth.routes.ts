import {
  forgotPassword,
  login,
  me,
  resetPassword,
  signup,
  updateProfile,
  verifyEmail,
  verifyLink,
} from "../controllers/auth.controller";
import express from "express";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/sendForgotPasswordLink", forgotPassword);
router.get("/verifyLink", verifyLink);
router.get("/verifyEmail", verifyEmail);
router.put("/resetPassword", resetPassword);
router.get("/me", me);
router.put("/me", updateProfile);

export default router;
