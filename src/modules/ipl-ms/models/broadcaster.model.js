import mongoose from "mongoose";

const broadcasterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  platform: {
    type: String,
    required: [true, "Platform is required"],
    enum: ['tv','streaming'],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    minlength: 2,
    maxlength: 100,
    lowercase: true,
    trim: true,
  },
}, {timestamps: true});

export default mongoose.model('Broadcaster',broadcasterSchema);
