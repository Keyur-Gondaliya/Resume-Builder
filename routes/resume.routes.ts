import express from "express";
import {
  addToHistory,
  generatePdf,
  getHistory,
  updateResumeById,
  uploadImage,
} from "../controllers/resume.controller";

const router = express.Router();
router.get("/", getHistory);
router.post("/", addToHistory);
router.post("/image", uploadImage);
router.put("/id", updateResumeById);
router.post("/pdf", generatePdf);

export default router;
