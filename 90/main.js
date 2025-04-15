const express = require('express')
const app = express()
const port = 3000

// app.use express.static is also a middleware
// app.use(express.static("public"), ()=>{
//     console.log("User visited aboutProject.txt")
// })

// Middleware 1
app.use((req, res, next)=>{
    console.log("Middleware 1")
    next();
})

// Middleware 2
app.use((req, res, next)=>{
    console.log("Middleware 2")
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})