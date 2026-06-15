import mongoose from "mongoose";
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Team Name is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  homeCity: {
    type: String,
    required: [true, "Home City is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  logoUrl: {
    type: String,
    default: null,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    required: [true, "Owner is required"],
  },
});

export default mongoose.model("Team", teamSchema);
