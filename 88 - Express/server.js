const express = require('express')
const app = express()
const port = 3000

// files inside public(it can be any name) can be accessed using url 
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about page!')
})

app.get('/contact', (req, res) => {
  res.send('contact page!')
})

// app.get('/:slug/:slug1', (req, res) => {
//   // http://127.0.0.1:3000/javascript/loops -> this course is about javascript loops
//   res.send(`this course is about ${req.params.slug} ${req.params.slug1}`)
// })

// app.get('/:slug', (req, res) => {
//   // http://127.0.0.1:3000/javascript -> this course is about javascript
//   res.send(`this course is about ${req.params.slug}`)
// })

app.get('/:slug', (req, res)=>{

    // for this url
    // http://127.0.0.1:3000/jaydeep?mode=dark&region=in

    res.send(req.params.slug);
    console.log(req) // prints complete req object
    console.log(req.params) // { slug: 'jaydeep' }
    console.log(req.params.slug) // jaydeep
    console.log(req.query) // { mode: 'dark', region: 'in' }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})