// imports the Mongoose library and makes it available for use
const mongoose  = require('mongoose')

// creates a reference to the Schema constructor provided by Mongoose. The schema defines the structure and properties of documents stored in MongoDB collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)