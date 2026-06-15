import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  teamA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: [true, 'Team A is required'],
  },
  teamB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: [true, 'Team B is required'],
  },
  venue: {
    type: String,
    required: [true, 'Venue is required'],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
  matchDate: {
    type: Date,
    required: [true, 'Match date is required'],
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    default: null,  
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['upcoming', 'live', 'completed'],
    default: 'upcoming',  
  }
}, { timestamps: true });

export default mongoose.model('Match', matchSchema);