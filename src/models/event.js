import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    teams: {
      type: Array,
    },
    dateOfEvent: {
      type: Date,
    }
  },
  { timestamps: true },
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
