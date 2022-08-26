const express = require('express')
const router = express.Router()

const db = require('../models')
//bringing the database to be read by the server.

// router.get("/", (req, res) => {
//     db.Post.find()
//     .then((results) => {
//         const context = {allPosts: results}
//         res.render("posts/index.ejs", context)
//     })
// })

router.get("/", (req, res) => {
    db.Wand.find()
    .then((results) => {
        const context = {allWands: results}
        res.render("views/index.ejs", context)
    })
})

module.exports = router