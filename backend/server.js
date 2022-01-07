const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dbconfig.js')
const Product = require('./models/productModel.js')

dotenv.config()
connectDB()
const app = express()

// app.get('/search', async (req, res) => {
//     let {term} = req.query
//     if(!term)term='tennis'
//     try {
//         let result = await Movie.aggregate([
//             {
//                 $search: {
//                     autocomplete: {
//                         query: term,
//                         path: "title",
//                         fuzzy: {
//                             'maxEdits': 2
//                         }
//                     }
//                 }
//             },
//             {
//                 $limit: 3,
//             },
//             {
//                 $project: {
//                     _id: 0,
//                     title: 1,
//                     plot: 1,
//                 },
//             },
//         ])
//         res.send(result)
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).send({ message: err.message })
//     }
// })

app.listen(5000, console.log("SERVER IN 5000"))

// console.log(app)









// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");
// const agg = [
//     {
//         $search: {
//             text: {
//                 query: "baseball",
//                 path: "plot",
//             },
//         },
//     },
//     {
//         $limit: 5,
//     },
//     {
//         $project: {
//             _id: 0,
//             title: 1,
//             plot: 1,
//         },
//     },
// ];
// console.log("HELLO")
// MongoClient.connect(
//     "mongodb+srv://patrickv123:PatrickV123@cluster0.1zhkw.mongodb.net/sample_mflix?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     async function (connectErr, client) {
//         assert.equal(null, connectErr);
//         const coll = client.db("sample_mflix").collection("movies");
//         let cursor = await coll.aggregate(agg);
//         await cursor.forEach((doc) => console.log(doc));
//         client.close();
//     }
// );