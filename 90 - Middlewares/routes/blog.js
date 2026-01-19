const express = require('express')
const router = express.Router()


// middleware that is specific to this router
router.use((req, res,next)=>{
    console.log("This middle specifically run for this blog routes")
    next();
})

router.get('/', (req, res)=>{
    res.send("blog home page")
})

module.exports = router;

