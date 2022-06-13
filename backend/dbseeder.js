// import mongoose from  'mongoose'
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const Product = require('./models/productModel.js')
const products = require('./data/product.js')
// const User = require('./models/userModel.js')
// const users = require('./data/users.js')
// const Order = require('./models/orderModel.js')
// const orders = require('./data/orders.js')
// const colors = require('colors')

dotenv.config()


const importData = async () => {
await connectDB()
try {
        // console.log(products)
        for (let i = 0; i < products.length; i++) {
            let formattedName = products[i].name.toLowerCase().replace(/ /g, '')
            let ar = []
            for (let j = 0; j < products[i].imgSrcSize; j++) {
                ar.push(`https://ik.imagekit.io/oqrgl5cil3a/groovemade/${formattedName}/${j}.jfif`)
            }
            products[i]={...products[i],imgSrc:ar}
        }


    
        console.log(products)
        await Product.deleteMany()
        // await User.deleteMany()
        // await Order.deleteMany()
        // await User.insertMany(users)
        await Product.insertMany(products)
        // await Order.insertMany(orders)
        console.log(`DATA IMPORTED`);
        process.exit()
    } catch (error) {
        console.log(`ERROR: ${error}`);
        process.exit(1)
    }
}
importData()