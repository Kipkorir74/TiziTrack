require("dotenv").config()

const express = require('express');
const TiziRoutes = require('./routes/workouts')

//store the express app in "app"
const app = express()

//register a middleware. Next ensures that the app moves to the next method fired
app.use(express.json())


app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//react to requests. Set up a route handler
app.use('/api/tizi',TiziRoutes)

//listen for requests 
app.listen(process.env.PORT, () => {
    console.log("Listening to port 4000!!")
})

