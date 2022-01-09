const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')
let path = require('path')
console.log(__dirname)

dotenv.config()
connectDB()
const app = express()

app.use('/api/products',productRoutes)
// SERVE BUILD FILES TO CLIENT
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/api',(req,res)=>{
    res.send("api")
})
}

app.listen(process.env.PORT||5000,console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

