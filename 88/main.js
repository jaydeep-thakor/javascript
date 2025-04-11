const express = require('express')
const app = express()
const port = 3000

// files inside public can be accessed
app.use(express.static('public'))

// if we have multiple folders and give access of folders' files, write it twice
app.use(express.static('dbstatic'))
app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.send('Hello World 1!')
})

// we can make such end points like if user hit about url, serve this page
app.get('/about', (req, res) => {
    res.send('This is about us page')
})

// but if we have a blog site and there are thousands of pages we will not make one one / end points, we will use slog
app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`This is ${req.params.slug} page`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})