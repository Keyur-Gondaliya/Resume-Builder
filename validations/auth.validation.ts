import { NextFunction, Request, Response } from "express";
import db from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import * as z from "zod";
import { UserUnathorized, ZodInputValidation } from "../utils/error";

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
  token: z.string().min(18),
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
  token: z.string().min(18),
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
const decodeJWT = (req: Request) => {
  const token = _tokenFromRequest(req);
  if (!token) return null;

  try {
    let JWT_SECRET = process.env.JWT_SECRET || "defaultjwtsecret";
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
const _tokenFromRequest = (req: Request): string | null => {
  // Express headers are auto converted to lowercase
  //   req.headers["x-access-token"] ||
  let token = req.headers["authorization"];
  if (token && token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
    return token;
  }
  return null;
};

const loggedIn = async (req: Request, res: Response, next: NextFunction) => {
  const decoded = decodeJWT(req);
  if (!decoded) return next(UserUnathorized());

  var user = await User.findOne({ _id: decoded, active: true });
  if (!user) return next(UserUnathorized());
  // req.user = user;

  return next();
};
const tokenForUser = (user: any) => {
  const payload = {
    user: {
      _id: user._id,
    },
  };
  let JWT_SECRET = process.env.JWT_SECRET || "defaultjwtsecret";
  return jwt.sign(payload, JWT_SECRET, {});
};

export {
  loginValidation,
  forgotPasswordValidation,
  tokenValidation,
  resetPasswordValidation,
  loggedIn,
  tokenForUser,
};
