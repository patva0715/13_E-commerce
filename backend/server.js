const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const colors = require('colors')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use('/api/products',productRoutes)

if(process.env.NODE_ENV==='production'){
    // const __dirname=path.resolve()
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/api',(req,res)=>{
    res.send("api")
})

app.listen(process.env.PORT,console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`.green.underline))

