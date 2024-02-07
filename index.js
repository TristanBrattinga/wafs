require('dotenv').config();
const express = require('express');
const api  = require('./api')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.use((req, res) => {
  res.status(404).send('We`re sorry, we were not able to find the page you were looking for');
});

app.use('/api', api)

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});

module.exports = app