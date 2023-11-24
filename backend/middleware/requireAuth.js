const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth =  async (req, res, next )=> {
    // Verify that user is authenticated
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" })
    }

    const token = authorization.split(' ')[1]

    try {
        // Grab id from token if available
        // If verification success, return Id from payload

        const { _id } = jwt.verify(token, process.env.SECRET)

        // find user in the database witrh the id

        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Request is unauthorized' })
    }
}

module.exports = requireAuth