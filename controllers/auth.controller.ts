import db from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const User = db.user;

const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
export { signup };
