require('dotenv').config()
const express = require('express')
const app     = express()
const port    = process.env.PORT || 3000

app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

const favouriteMovies = ['return-of-the-jedi', 'i-am-legend', 'avengers-endgame', 'the-hateful-eight']
let movies            = []

const fetchMovies = () => {
    favouriteMovies.map((movie) => {
      fetch(`http://www.omdbapi.com/?apikey=12dd510b&t=${movie}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error
            (`HTTP error! Status: ${res.status}`)
          }
          return res.json()
        })
        .then((movieData) => {
          movies.push(movieData)
          console.log(movies)
          return movies
        })
        .catch((e) => console.error('Unable to fetch data:', e))
    })
}

fetchMovies()

// index page
app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://tristanbrattinga.github.io/wafs/data/data.json')
    const data     = await response.json()
    res.render('pages/index', { data: data, movies: movies })
  } catch (e) {
    console.error('Unable to fetch the data:', e)
  }
})

// Error handling for not-existing pages
app.use((req, res) => {
  res.status(404).send('We`re sorry, we were not able to find the page you were looking for')
})

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`)
})