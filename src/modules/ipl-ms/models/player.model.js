import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Player name is required "],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  role: {
    type: String,
    required: [true,"Role is required"],
    enum: ['batsmen', 'bowler', 'allrounder', 'wicketkeeper' ]
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  salary: {
    type:Number,
    default: null
  }
}, {timestamps: true})

export default mongoose.model('Player',playerSchema);