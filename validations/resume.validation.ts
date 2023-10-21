import { NextFunction, Request, Response } from "express";
import * as z from "zod";
import { ZodInputValidation } from "../utils/error";

const resumeSchema = z.object({
  name: z.string().min(1),
  score: z.number(),
  data: z.object({}),
});
const addResumeValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    resumeSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};
const updateResumeSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  score: z.number(),
  data: z.object({}),
});
const updateResumeValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    updateResumeSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};

const pdfSchema = z.object({
  html: z.string().min(1),
});
const pdfValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    pdfSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};

export { addResumeValidation, pdfValidation, updateResumeValidation };
