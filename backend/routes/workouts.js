const express = require ('express')

const router = express.Router()


//retrive all workouts
router.get('/',(req,res)=>{
  res.json({mssg:"Retrieve all workouts"})
})

// retrieve a single workout
router.get('/:id', (req,res)=>{
    res.json({mssg:"Retrieve a single workout"})
})

//add a new workout
router.post('/',(req,res)=>{
    res.json({mssg:"New workout added"})
})

//delete a workout
router.delete('/:id', (req,res)=>{
    res.json({mssg:"deleted a single workout"})
})

//Update a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg:"updated a single workout"})
})



module.exports = router