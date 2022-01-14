const express = require('express')
const router = express.Router()
const Product = require('../models/productModel.js')

// @desc        Search products Autocomplete
// @route       GET /api/products/search
// @access      Public
router.get('/search', async (req, res) => {
    let { term } = req.query
    if (!term) term = ''
    try {
        let result = await Product.aggregate([
            {
                $search: {
                    index: 'groovemade',
                    'autocomplete': {
                        query: term,
                        path: "name",
                        fuzzy: {
                            'maxEdits': 1
                        }
                    }
                }
            },

            {
                $limit: 4,
            },

            {
                $project: {
                    _id: 1,
                    name: 1,
                    price: 1,
                    score: { $meta: "searchScore" }
                },
            },

            { $sort: { price: -1, } }

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
    async (req, res) => {
        // const collection=req.url.split('/')[1]
        // const products =await Product.find(collection?{tags:[collection]}:{})
        const products = await Product.find()
        res.json(products)
    })

// @desc        Search products by category
// @route       GET /api/products/category
// @access      Public
router.get('/category', async (req, res) => {
    let { term } = req.query
    let category = term.split(',')
    // CATEGORY  string array of different categories
    try {
        let result = await Product.aggregate([
            {
                $search: {
                    'index': 'groovemade',
                    "compound": {
                        "filter": [{
                            "autocomplete": {
                                "query": category,
                                "path": "category"
                            }
                        }]
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    price: 1,
                    category: 1
                },
            },
            { $sort: { price: -1, } }
        ])

        
        res.send(result)
    } catch (err) {
        console.log(err.message)
        res.status(500).send({ message: err.message })
    }
})

// @desc        Fetch a product by ID
// @route       GET /api/products/:id
// @access      Public
router.get(
    '/:id',
    async (req, res) => {
        const product = await Product.findById(req.params.id, { createdAt: 0, updatedAt: 0, __v: 0 })
        if (product) {
            res.status(200)
            res.json(product)
        } else {
            res.status(401)
            throw new Error('Product not found')
        }
    })


module.exports = router