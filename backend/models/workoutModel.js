// imports the Mongoose library and makes it available for use
const mongoose  = require('mongoose')

// creates a reference to the Schema constructor provided by Mongoose. The schema defines the structure and properties of documents stored in MongoDB collection
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('Workout', workoutSchema)