require('dotenv').config()
const express = require('express')
const app     = express()
const port    = process.env.PORT || 3000

app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

// index page
app.get('/', async function(req, res) {
  // const apiKey = process.env.OMDB_API_KEY
  // const apiUrl = `http://www.omdbapi.com/?apikey=12dd510b&t=phantom`
  // const getData = await fetch(apiUrl)
  // console.log('hallo')
  // console.log(res.json(getData))
  res.render('pages/index')
})

// Error handling for not-existing pages
app.use((req, res) => {
  res.status(404).send('We`re sorry, we were not able to find the page you were looking for')
})

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`)
})