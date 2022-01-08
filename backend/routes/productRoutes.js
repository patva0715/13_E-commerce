const express = require('express')
const router = express.Router()
const Product = require('../models/productModel.js')


// @desc        Search Autocomplete products
// @route       GET /api/products/search
// @access      Public
router.get('/search', async (req, res) => {
    let {term} = req.query
    if(!term)term='tennis'
    try {
        let result = await Product.aggregate([
            {
                $search: {
                    index:'groovemade',
                    autocomplete: {
                        query: term,
                        path: "name",
                        fuzzy: {
                            'maxEdits': 2
                        }
                    }
                }
            },
            {
                $limit: 2,
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                },
            },
        ])
        res.send(result)
    } catch (err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public
router.get(
    '/',
    async(req,res)=>{
        // const collection=req.url.split('/')[1]
        // const products =await Product.find(collection?{tags:[collection]}:{})
        const products =await Product.find()
        res.json(products)
})

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public
router.get(
    '/:id',
    async(req,res)=>{
        const product =await Product.findById(req.params.id)
        if(product){
            res.status(200)
            res.json(product)
        } else {
            res.status(401)
            throw new Error('Product not found')
        }
})
module.exports = router