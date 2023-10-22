import express from "express";
import {
  addToHistory,
  generatePdf,
  getHistory,
  updateResumeById,
  uploadImage,
} from "../controllers/resume.controller";
import {
  addResumeValidation,
  pdfValidation,
  updateResumeValidation,
} from "../validations/resume.validation";
import { loggedIn } from "../validations/auth.validation";

const router = express.Router();
router.get("/", loggedIn, getHistory);
router.post("/", loggedIn, addResumeValidation, addToHistory);
router.post("/image", loggedIn, uploadImage);
router.put("/id", loggedIn, updateResumeValidation, updateResumeById);
router.post("/pdf", loggedIn, pdfValidation, generatePdf);

export default router;
