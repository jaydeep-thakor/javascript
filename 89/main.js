const express = require('express')
const app = express()
const port = 3000

const blog = require("./routes/blog")
const shop = require("./routes/shop")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static("public"))
app.use("/blog", blog)
app.use("/shop", shop)

// ********************************** to test requests manually **********************************
// http://localhost:3000/postRequest.html
app.post('/', (req, res) => {
    console.log("POST REQUEST");
    res.send('Post Request')
})
// http://localhost:3000/putRequest.html
app.put("/", (req, res)=>{
    console.log("PUT REQUEST")
    res.send("Put Request");
})
// http://localhost:3000/deleteRequest.html
app.delete("/", (req, res)=>{
    console.log("DELETE REQUEST")
    res.send("Delete Request")
})

// always write req parameter first, and then res parameter

// to serve a page
app.get("/home", (req, res)=>{
    res.sendFile("templates/index.html", {root: __dirname})
})
// to redirect
app.get("/youtube", (req, res)=>{
    res.redirect("https://www.youtube.com")
})

app.get("/api", (req, res)=>{
    res.json({
        name: "Nova",
        age: 27,
        isActive: true,
        country: "Canada",
        score: 89.5,
        hobbies: ["reading", "cycling", "coding"],
        lastLogin: "2025-04-14T10:22:00Z",
        isPremiumUser: false,
        favoriteColor: "teal",
        userId: "u7683abx91"
    })
})

// res.download()
// res.end()
// res.json()
// res.jsonp()
// res.redirect()
// res.render()
// res.send()
// res.sendFile()
// res.sendStatus()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



