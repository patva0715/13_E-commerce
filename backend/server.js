const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const orderRoutes = require('./routes/orderRoutes.js')
let path = require('path')
const {errorHandler} = require('./middleWare/errorMiddleWare.js')
// CONFIG APP AND DB
dotenv.config()
connectDB()
const app = express()
app.use(express.json())

// ROUTES HERE
app.use('/api/products', productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../','frontend', 'build', 'index.html'))
    })
} else {
    app.get('/api', (req, res) => {
        res.send("api")
    })
}
app.use(errorHandler)

app.listen(process.env.PORT || 5000, console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

