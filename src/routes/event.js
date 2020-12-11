
import { Router } from 'express';

const router = Router();

//POST
router.post('/', async (req, res) => {
  try {
    const {
      name,
      teams,
      dateOfEvent
    } = req.body

    const newEvent = await req.context.models.Event.create({
      name,
      teams,
      dateOfEvent
    })

    res.json({
      success: true,
      message: 'Event added',
      data: {
        Event: newEvent
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
    const allEvents = await req.context.models.Event.find();

    res.json({
      success: true,
      message: 'All Events',
      data: {
        Events: allEvents
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
    const newDataEvent = req.body

    const eventSelected = await req.context.models.Event.findById(id, newDataEvent)
    res.json({
      success: true,
      message: 'Event Selected',
      data: {
        Event: eventSelected
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
    const newDataEvent = req.body

    const eventUpdated = await req.context.models.Event.findByIdAndUpdate(id, newDataEvent)
    res.json({
      success: true,
      message: 'Event updated',
      data: {
        Event: eventUpdated
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

    const deletedEvent = await req.context.models.Event.findByIdAndDelete(id)

    res.json({
      success: true,
      message: 'Event Deleted',
      data: {
        Event: deletedEvent
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
