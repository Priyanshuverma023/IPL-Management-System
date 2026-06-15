import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Sponsor name is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
  }, 
  industry: {
    type: String,
    required: [true, "Industry is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
    enum: ['technology', 'finance', 'sports','entertainment']
  },
  budget: {
    type: Number,
    required: [true, "Budget is required"],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    minlength: 2,
    maxlength: 100,
    lowercase: true,
    trim: true,
  }
},{timestamps: true});

export default mongoose.model('Sponsor', sponsorSchema);