const express = require('express')
const app = express()
const port = 3000
const customBlogRoutes = require('./routes/blog')

app.use(express.static("public"))
app.use('/blogs', customBlogRoutes)

// Middleware lets you control,(user logged in or not) check, and prepare a request before it reaches the route in Express.js.
// middleware 1
app.use((req, res, next)=>{
    console.log(req.headers);
    req.jaydeepData = "I am Jaydeep, I am a software developer"
    console.log(`${Date.now()} is a ${req.method}`)
    console.log("hacked by middleware 1")
    // res.send("hello world") we also can send res from here
    next(); // if do not write next() request will stop here
})

// middleware 2
app.use((req, res, next)=>{
    // this one will overwrite first one
    req.jaydeepData = "I am Jaydeep, I am a full stack developer"
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!' + req.jaydeepData);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
