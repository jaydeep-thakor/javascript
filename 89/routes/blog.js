const express = require('express');

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Blog Home Page")
})

router.get("/about", (req, res)=>{
    res.send("Blog Abuot Home Page")
})

router.get("/:slug", (req, res)=>{
    res.send(`This page is about ${req.params.slug}`)
})

module.exports = router;







