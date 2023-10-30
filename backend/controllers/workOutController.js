const workoutModel = require('../models/workoutModel')
const mongoose = require('mongoose')

//async keyword indicates that the function contains asynchronous code and might 
//use await to pause execution until promises are resolved.

//Retrieve all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await workoutModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)

}

//Retrieve a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout exists' })
    }

    const workout = await workoutModel.findById(id)

    if (!workout) {
        return res.status(404).json({ error: "No such workout exists" })
    }
    else {
        return res.status(200).json(workout)
    }
}

//Create a single workout
const createWorkout = async (req, res) => {
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
        res.status(400).json({ error: error.message })
    }
}

//Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout exists' })
    }

    const workout = await workoutModel.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(404).json({ error: "No such workout exists" })
    }

    res.status(200).json(workout)
}

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout exists' })
    }

    const workout = await workoutModel.findByIdAndUpdate({_id:id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({ error: "No such workout exists" })
    }

    res.status(200).json(workout)
}

module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}