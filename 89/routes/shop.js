const express = require("express");

const router = express.Router();
const path = require('path');

router.get("/", (req, res)=>{
    // res.sendFile("../templates/shopping.html", {root: __dirname})
    res.sendFile(path.join(__dirname, '../templates/shopping.html'));
})

router.get("/:slug", (req, res)=>{
    res.send(`${req.params.slug}`)
})

module.exports = router;





