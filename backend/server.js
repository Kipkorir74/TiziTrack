require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose')
const TiziRoutes = require('./routes/workouts')

//store the express app in "app"
const app = express()

//register a middleware. Next ensures that the app moves to the next method fired
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/tizi', TiziRoutes)

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



