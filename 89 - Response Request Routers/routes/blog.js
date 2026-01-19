const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("Blog home page")
})

router.get('/about', (req,res)=>{
    res.send("Blog's about page")
})

router.get('/blogspot/:slug', (req,res)=>{
    res.send(`blog's blogsport ${req.params.slug} page`)
})

module.exports = router