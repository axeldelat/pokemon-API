import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    abilities: {
      type: Array,
    },
    sprites: {
      type: Object,
    },
    stats: {
      type: Array,
    },
    types: {
      type: Array,
    },
  },
  { timestamps: true },
);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;
