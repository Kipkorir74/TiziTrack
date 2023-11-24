const express = require('express')

const{createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout}=require('../controllers/workOutController')

const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

//require auth for all workout routes

router.use(requireAuth)

//retrive all workouts
router.get('/', getAllWorkouts)

// retrieve a single workout
router.get('/:id', getWorkout)

//add a new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)



module.exports = router