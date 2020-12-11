import mongoose from 'mongoose';

import Event from './event';
import Pokemon from './pokemon';
import Team from './team';
import User from './user';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Event, Pokemon, Team, User };

export { connectDb };

export default models;
