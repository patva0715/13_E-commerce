const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')
let path = require('path')

<<<<<<< HEAD
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
=======

dotenv.config()
connectDB()
const app = express()
// console.log(__dirname)

app.use(express.json())
app.use('/api/products',productRoutes)



<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
>>>>>>> parent of 70a0191 (fix server)
    })
} else {
    app.get('/api', (req, res) => {
        res.send("api")
    })
=======
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/../frontend/build')))
    app.get('*',(req,res)=>{
          res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
      })
}else{
    app.get('/api',(req,res)=>{
    res.send("api")
})
>>>>>>> parent of 80bfe49 (minor style fix 4 mobile)
}

app.listen(process.env.PORT||5000,console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

