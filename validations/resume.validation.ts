import { NextFunction, Request, Response } from "express";
import db from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import * as z from "zod";
import { ZodInputValidation } from "../utils/error";
const User = db.user,
  Resume = db.resume;

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
const forgotPasswordValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    forgotPasswordSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};

const tokenSchema = z.object({
  id: z.string().min(18),
});
const tokenValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    tokenSchema.parse(req.query);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};

const resetPasswsordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const resetPasswordValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    resetPasswsordSchema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json(ZodInputValidation(error));
  }
};
export {
  loginValidation,
  forgotPasswordValidation,
  tokenValidation,
  resetPasswordValidation,
};
