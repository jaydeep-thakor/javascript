 const express = require('express');
 const router = express.Router();

router.get('/', (req, res)=>{
    res.send("shop home page")
})

router.get('/product/:productName', (req, res)=>{
    res.send(`this is product page of ${req.params.productName}`)
})

module.exports = router;

