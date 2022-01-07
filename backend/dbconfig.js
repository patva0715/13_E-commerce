const mongoose = require("mongoose")
const colors = require('colors')

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${connect.connection.host}`.blue.bold);
    } catch(error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit(1)
    }
}

module.exports = connectDB