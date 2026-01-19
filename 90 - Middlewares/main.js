const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static("public"))

// Middleware lets you control, check, and prepare a request before it reaches the route in Express.js.
app.use((req, res, next)=>{
  const time = new Date().toLocaleString();

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const device = req.headers["user-agent"];

  fs.appendFileSync(
    "logs.txt",
    `${time} | ${req.method} | IP: ${ip} | Device: ${device}\n`
  );
    console.log(`${Date.now()} is a ${req.method}`)
    console.log("hacked by middleware 1")
    // res.send("hello world") we also can send res from here
    next(); // if do not write next() request will stop here
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
