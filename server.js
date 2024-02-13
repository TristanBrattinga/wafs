// Basic express server setup
require('dotenv').config()
const express = require('express')
const app     = express()
const port    = process.env.PORT || 3000

// Function to assign static folder
app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

// Define favourite movies
const favouriteMovies = ['return-of-the-jedi', 'i-am-legend', 'avengers-endgame', 'the-hateful-eight']

// Empty array that will house the fetched movie data
let movies = []

// Empty object that will house the fetched personal data
let personalData = {}

// Function that maps over the favourite movies array and pushes them into the movies array
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
        return movies
      })
      .catch((e) => console.error('Unable to fetch data:', e))
  })
}

// Function that fetches personal JSON data
const fetchPersonalData = () => {
  fetch('https://tristanbrattinga.github.io/wafs/data.json').then((res) => {
      if (!res.ok) {
        throw new Error
        (`HTTP error! Status: ${res.status}`)
      }
      return res.json()
    })
    .then((data) => {
      personalData = data
      return personalData
    })
    .catch((e) => console.error('Unable to fetch personal data:', e))
}

// Function calls
fetchMovies()
fetchPersonalData()

// Route handle for the index page
app.get('/', async (req, res) => {
  res.render('pages/index', { data: personalData, movies: movies })
})

// Error route handling for not-existing pages
app.use((req, res) => {
  res.status(404).send('We`re sorry, we were not able to find the page you were looking for')
})

// Function to start up the server, HELLO WORLD!
app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`)
})