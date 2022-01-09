const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')
let path = require('path')

// CONFIG APP AND DB
dotenv.config()
connectDB()
const app = express()
app.use(express.json())

// ROUTES HERE
app.use('/api/products', productRoutes)

// SERVE STATIC FILE TO CLIENT IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        app.use(express.static(path.join(__dirname, '/../frontend/build')))
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/api', (req, res) => {
        res.send("api")
    })
}

app.listen(process.env.PORT || 5000, console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

