import mongoose from "mongoose";

const teamBroadcasterSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },
    broadcaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broadcaster",
    },
    contractStart: {
      type: Date,
      required: true,
    },
    contractEnd: {
      type: Date,
      required: true,
    },
    amountDeal: {
      type: Number,
      required: [true, "Deal Amount is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model('TeamBroadcaster', teamBroadcasterSchema);