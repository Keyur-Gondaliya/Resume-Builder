import mongoose, { Date } from "mongoose";

var schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String, select: false },
    otp: String,
    verified: { token: String, state: { type: Boolean, default: false } },
    token: {
      value: String,
      expiresAt: String,
      isUsed: { type: Boolean, default: false },
    },
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
