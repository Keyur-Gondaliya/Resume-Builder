import db from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import { Request, Response } from "express";
import puppeteer from "puppeteer";

const SUCCESS = true;

const Resume = db.resume;

const getHistory = async (req: Request, res: Response) => {
  try {
    const resumeListData = await Resume.find({
      _id: { $in: req.user.resumeList },
    });
    res.json(resumeListData);
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};
const addToHistory = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { name, score, data } = req.body;
    const newResume = new Resume({ name, score, data });
    await newResume.save();
    user.resumeList.push(newResume._id);
    user.save();
    res.json({ SUCCESS });
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};
const generatePdf = async (req: Request, res: Response) => {
  let { html, id } = req.body,
    url: string = process.env.MAIN_URL || "";
  try {
    // Create a browser instance
    // Regular expression to extract src attributes from img tags
    const imgSrcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;

    // Array to store extracted src attributes
    const srcAttributes = [],
      image64: any = [];

    // Match all img tags and extract src attributes
    let match;
    // html=hmtl.replaceAll()
    while ((match = imgSrcRegex.exec(html)) !== null) {
      image64.push(
        "data:image/png;base64," +
          fs
            .readFileSync(`public/${match[1].replace(url, "")}`)
            .toString("base64")
      );

      srcAttributes.push(match[1]);
    }
    srcAttributes.map((e, i) => {
      html = html.replace(e, image64[i]);
    });
    // Print the extracted src attributes
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    //Get HTML content from HTML file
    // const html = fs.readFileSync("public/sample.html", "utf-8");

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
    });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");
    // Downlaod the PDF
    await page.pdf({
      margin: { top: "2px", bottom: "1px" },
      path: `public/uploads/PDF/${id}.pdf`,
      format: "A4",
    });
    res.status(200).send({
      message: "Pdf Created SUccessfully",
      data: `${process.env.MAIN_URL}uploads/PDF/${id}.pdf`,
    });
    // Close the browser instance
    await browser.close();
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Pdf Generation Faild.",
      success: false,
      error: error,
    });
  }
};
const updateResumeById = async (req: Request, res: Response) => {
  const { id, name, score, data } = req.body;
  const resume = await Resume.findByIdAndUpdate(id, { name, score, data });
  if (!resume) {
    res.status(403).json({ message: "Resume Does not exists" });
  } else {
    res.json({ SUCCESS });
  }
};
const uploadImage = async (req: Request, res: Response) => {
  const imageFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith("image/")) {
      // Check if the file type is an image
      cb(null, true);
    } else {
      // Reject the file
      cb("Only images are allowed!", false);
    }
  };
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads/ResumeImages/");
    },
    filename: function (req, file, callback) {
      callback(null, Date.now() + path.extname(file.originalname));
    },
  });

  const uploaFile = multer({
    storage: storage,
    limits: {
      fileSize: 2 * 1024 * 1024, // 2MB limit (in bytes)
    },
    fileFilter: imageFilter, // Apply the custom image filter
  }).single("image");

  uploaFile(req, res, async (err) => {
    if (!req.file) {
      res.status(400).send({
        data: null,
        message: "Select Image Only with max size of 2MB.",
      });
    } else if (err) {
      res.status(400).send({
        data: null,
        message: "image not upload",
      });
    } else {
      res.status(200).send({
        data: {
          filepath_url: req.file.filename,
          url:
            process.env.MAIN_URL + "uploads/ResumeImages/" + req.file.filename,
        },
        message: "Image Uploaded Successfully",
      });
    }
  });
};
export { getHistory, addToHistory, generatePdf, updateResumeById, uploadImage };
