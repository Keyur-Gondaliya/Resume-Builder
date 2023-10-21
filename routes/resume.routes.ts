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

const router = express.Router();
router.get("/", getHistory);
router.post("/", addResumeValidation, addToHistory);
router.post("/image", uploadImage);
router.put("/id", updateResumeValidation, updateResumeById);
router.post("/pdf", pdfValidation, generatePdf);

export default router;
