const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const productRoutes = require('./routes/productRoutes.js')
let path = require('path')


dotenv.config()
connectDB()
const app = express()
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/../frontend/build')))
  app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
app.use(express.json())
app.use('/api/products',productRoutes)



if(process.env.NODE_ENV==='production'){
  
}else{
    app.get('/api',(req,res)=>{
    res.send("api")
})
}

app.listen(process.env.PORT||5000,console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`))

