import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import { createServer } from "http";
import db from "./models";
import userRoutes from "./routes/auth.routes";
import historyRoutes from "./routes/resume.routes";
import mongoose from "mongoose";

const server = createServer(app);

var corsOptions = {
  origin: "*",
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
};

app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.json());

if (db.url) {
  mongoose
    .connect(db.url)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });
} else {
  console.error("Database URL is undefined.");
}
app.use("/app/user", userRoutes);
app.use("/app/history", historyRoutes);

app.get("/", async (req, res) => {
  res.json({ message: "Resume Builder Test Mode." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
