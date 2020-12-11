import { Router } from 'express';

const router = Router();

//POST
router.post('/', async (req, res) => {
  try {
    const {
      username
    } = req.body

    const newUser = await req.context.models.User.create({
      username
    })

    res.json({
      success: true,
      message: 'User added',
      data: {
        User: newUser
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
    const allUsers = await req.context.models.User.find();

    res.json({
      success: true,
      message: 'All Users',
      data: {
        Users: allUsers
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
    const newDataUser = req.body

    const userSelected = await req.context.models.User.findById(id, newDataUser)
    res.json({
      success: true,
      message: 'User Selected',
      data: {
        User: userSelected
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
    const newDataUser = req.body

    const userUpdated = await req.context.models.User.findByIdAndUpdate(id, newDataUser)
    res.json({
      success: true,
      message: 'User updated',
      data: {
        User: userUpdated
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

    const deletedUser = await req.context.models.User.findByIdAndDelete(id)

    res.json({
      success: true,
      message: 'User Deleted',
      data: {
        User: deletedUser
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
