import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true,
    },
    pokemons: {
      type: Array
    },
  },
  { timestamps: true },
);

const Team = mongoose.model('Team', teamSchema);

export default Team;
