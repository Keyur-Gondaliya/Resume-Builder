import mongoose from "mongoose";

var schema = new mongoose.Schema(
  {
    name: String,
    score: Number,
    data: Object,
  },
  { timestamps: true }
);

const Resume = mongoose.model("resume", schema);
export default Resume;
