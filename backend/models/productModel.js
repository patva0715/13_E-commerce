const mongoose = require('mongoose')

// const descriptionSchema=mongoose.Schema({
//     subtitle:String,
//     description:String,
//     features:Array,
//     specification:{
//         dimension:String,
//         weight:String,
//         materials:Array
//     }
// },{
//     _id:false
// })

const productSchema = mongoose.Schema({
    name: String,
    subtitle: String,
    description: String,
    colors: Array,
    category: {
        type: String,
        defualt: 'none',
        required:true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    images: {
        main: String,
        sub: String
    },
    featured: {
        type: Boolean,
        required: true,
        default: false
    },
    options: {
        type: Array,

    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product