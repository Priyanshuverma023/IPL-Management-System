import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Owner name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    company: {
      type: String,
      required: [true, "company name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    netWorth: {
      type: Number,
      default: 0,
    },
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Owner", ownerSchema);
