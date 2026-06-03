import mongoose from "mongoose";

const nocUserAuthSchema = new mongoose.Schema(
  {
    userInfo: {
      fullName: {
        type: String,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
    },
    userAuth: {
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true },
);

export const NocUserAuth = mongoose.model("NocUserAuth", nocUserAuthSchema);
