import { Router } from 'express';

const router = Router();

//POST
router.post('/', async (req, res) => {
  try {
    const {
      name,
      members,
      pokemons,
    } = req.body

    const newTeam = await req.context.models.Team.create({
      name,
      members,
      pokemons,
    })

    res.json({
      success: true,
      message: 'Team added',
      data: {
        Team: newTeam
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
    const allTeams = await req.context.models.Team.find();

    res.json({
      success: true,
      message: 'All Teams',
      data: {
        Teams: allTeams
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
    const newDataTeam = req.body

    const teamSelected = await req.context.models.Team.findById(id, newDataTeam)
    res.json({
      success: true,
      message: 'Team Selected',
      data: {
        Team: teamSelected
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
    const newDataTeam = req.body

    const teamUpdated = await req.context.models.Team.findByIdAndUpdate(id, newDataTeam)
    res.json({
      success: true,
      message: 'Team updated',
      data: {
        Team: teamUpdated
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

    const deletedTeam = await req.context.models.Team.findByIdAndDelete(id)

    res.json({
      success: true,
      message: 'Team Deleted',
      data: {
        Team: deletedTeam
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
