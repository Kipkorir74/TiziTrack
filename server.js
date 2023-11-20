// load environment variables from a .env file into process.env
require("dotenv").config()

// imports the Express framework
const express = require('express')

var cors = require('cors')

// imports the Mongoose library to interact with MongoDB databases
const mongoose = require('mongoose')

//imports the workouts file which stores the routes for the application.
const TiziRoutes = require('./backend/routes/workouts')

//import the user file which stores the user routes for the application
const userRoutes = require('./backend/routes/user')
//Creates an instance of the Express application and stores in the app variable. This instance will be used to define routes, configure middleware, and start the server.
const app = express()

app.use(cors())

// Registers middleware using app.use(). It tells Express to parse incoming JSON data from HTTP requests. This middleware is crucial for handling JSON data sent in the request body.
app.use(express.json())

// Logs information about incoming requests. Logs the path and HTTP method of each request and then calls next() to pass control to the next middleware in the chain.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//register routes
app.use('/api/tizi', TiziRoutes)
app.use('/api/user/', userRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests 
        app.listen(process.env.PORT, () => {
            console.log("Connected to mongoDb and Listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



