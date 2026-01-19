const express = require('express')
const blogCustomRoutes = require('./routes/blog'); 
const shopCustomRoutes = require('./routes/shop');
const app = express()
const port = 3000
 
// url starts with /blogs will be handled by blog.js
app.use('/blog', blogCustomRoutes);
app.use('/shop', shopCustomRoutes);
// app.use(express.static("public"))

// ********************* types of requests *********************

// GET request - (by default browser use get request)
app.get('/', (req, res) => {
    console.log("its a GET request")
    res.send('Hello World!')
})

// POST request
app.post('/', (req, res) => {
    console.log("its a POST request")
    res.send('Hello World!')
})

// to serve a page
app.get('/landingPage', (req, res) => {
    res.sendFile("templates/index.html", {root: __dirname})
})

app.get("/api", (req, res)=>{
    res.json({name: "jaydeep", city: "chicago", hobbies: ["cricket", "running", "books"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

