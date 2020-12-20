import { Router } from 'express';

const router = Router();

//POST
router.post('/', async (req, res) => {
  try {
    const {
      name,
      abilities,
      sprites,
      types,
      stats,
      gid
    } = req.body

    const newPokemon = await req.context.models.Pokemon.create({
      name,
      abilities,
      sprites,
      types,
      stats,
      gid
    })

    res.json({
      success: true,
      message: 'Pokemon added',
      data: {
        Pokemon: newPokemon
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

// GET
router.get('/', async (req, res) => {
  try {
    console.log(req.models)
    const allPokemons = await req.context.models.Pokemon.find();

    res.json({
      success: true,
      message: 'All Pokemons',
      data: {
        Pokemons: allPokemons
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
});

//GET by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newDataPokemon = req.body

    const pokemonSelected = await req.context.models.Pokemon.findById(id, newDataPokemon)
    res.json({
      success: true,
      message: 'Pokemon Selected',
      data: {
        Pokemon: pokemonSelected
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

//PATCH by ID
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newDataPokemon = req.body

    const pokemonUpdated = await req.context.models.Pokemon.findByIdAndUpdate(id, newDataPokemon)
    res.json({
      success: true,
      message: 'Pokemon updated',
      data: {
        Pokemon: pokemonUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

//DELETE by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedPokemon = await req.context.models.Pokemon.findByIdAndDelete(id)

    res.json({
      success: true,
      message: 'Pokemon Deleted',
      data: {
        Pokemon: deletedPokemon
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: error.message
    })
  }
})

export default router;
