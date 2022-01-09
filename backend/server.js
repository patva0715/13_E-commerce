const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')
let path = require('path')

dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '/../frontend/build')))

// console.log(__dirname)

app.use('/api/products', productRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../', 'frontend', 'build', 'index.html'))
})



// if (process.env.NODE_ENV === 'production') {

// } else {
//     app.get('/api', (req, res) => {
//         res.send("api")
//     })
// }

app.listen(process.env.PORT || 5000, console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

