import mongoose from "mongoose";

var schema = new mongoose.Schema(
  {
    email: String,
    password: String,
    otp: String,
    resumeList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "resume",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("user", schema);
export default User;
