// imports the Mongoose library and makes it available for use
const mongoose  = require('mongoose')

const bcrypt = require('bcrypt')

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

// static signup method
userSchema.static.signup = async function(name, email, password){

    // When using this keyword, do not use arrow function
    const exists = await this.findOne({email})

    if (exists){
        throw Error('Email already exists')
    }

    //create a Hash to increase security incasse of attack
    const salt = await bcrypt.genSalt(10)

    //Hash password to increase security incasse of attack
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({name, email, password: hash})

    return user

}

module.exports = mongoose.model('User', userSchema)