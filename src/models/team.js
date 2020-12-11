import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    members: {
      type: Object,
      //¿Cómo debería manejarse esta relación? user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    pokemons: {
      type: Object,
    },
  },
  { timestamps: true },
);

const Team = mongoose.model('Team', teamSchema);

export default Team;
