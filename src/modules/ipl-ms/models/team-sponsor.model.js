import mongoose from "mongoose";

const teamSponsorSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    sponsor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sponsor",
    },
    paidAmount: {
      type: Number,
      required: [true, "Paid amount is required"],
    },
    contractStart: {
      type: Date,
      required: true,
    },
    contractEnd: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("TeamSponsor", teamSponsorSchema);
