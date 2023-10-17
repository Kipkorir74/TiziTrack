const express = require('express')
const Workout = require('../models/workoutModel')
const workoutModel = require('../models/workoutModel')

const router = express.Router()


//retrive all workouts
router.get('/', (req, res) => {
    res.json({ mssg: "Retrieve all workouts" })
})

// retrieve a single workout
router.get('/:id', (req, res) => {
    res.json({ mssg: "Retrieve a single workout" })
})

//add a new workout
//async keyword indicates that the function contains asynchronous code and might 
//use await to pause execution until promises are resolved.
router.post('/', async (req, res) => {

    // destructure the req.body object to extract these properties.
    const { title, reps, load } = req.body

    try {
        // Create a new workout document using the Mongoose model workoutModel.
        const workout = await workoutModel.create({ title, reps, load })
        // Respond with a 200 (OK) status code and the created workout as JSON.
        res.status(200).json(workout)
    }
    catch (error) {
        // If there is an error, respond with a 400 (Bad Request) status code and an error message as JSON.
        res.status(400).json({ error:error.message })
    }
})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: "deleted a single workout" })
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: "updated a single workout" })
})



module.exports = router