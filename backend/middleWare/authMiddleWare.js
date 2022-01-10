const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async(req,res,next)=>{
    let token

    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user=await User.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.error(error)
            res.status(401)
            throw new Error('NOT AUTHORIZED, TOKEN FAILED')
        }
    }

    if(!token){
        res.status(401)
        throw new Error("NO TOKEN")
    }
    // next()
})

module.exports = {protect}