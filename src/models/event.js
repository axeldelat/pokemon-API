import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      unique: true,
    },
    team_id: {
      type: Array,
    }
  },
  { timestamps: true },
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
