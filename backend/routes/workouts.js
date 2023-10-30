const express = require('express')

const{createWorkout, getAllWorkouts, getWorkout}=require('../controllers/workOutController')

const router = express.Router()


//retrive all workouts
router.get('/', getAllWorkouts)

// retrieve a single workout
router.get('/:id', getWorkout)

//add a new workout
//async keyword indicates that the function contains asynchronous code and might 
//use await to pause execution until promises are resolved.
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: "deleted a single workout" })
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: "updated a single workout" })
})



module.exports = router