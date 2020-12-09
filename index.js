// import express, morgan, mongoose and models locally
const express = require('express');
  morgan = require('morgan');
  mongoose = require('mongoose');
  Models = require('./models.js');

// define express and models in a variable
const app = express();
const Movies = Models.Movie;
const Users = Models.User;
 
// connect mongoose with the database
mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });
  
// use morgan to log requests
app.use(morgan('common'));

// welcome request
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

// get all movies request
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// get single movie request
app.get('/movies/title', (req, res) => {
res.json(topMovies.title);
});

// get genre request
app.get('/movies/genres/title', (req, res) => {
  res.json(topGenres.title);
 });

// get director request
app.get('/movies/directors/name', (req, res) => {
  res.json(topDirectors.name);
});

// post new user request
app.post('/users', (req, res) => {
  res.json(userData);
});

// put user update request
app.put('/users/username', (req, res) => {
  res.json(userData.username);
});

// post favorite request
app.post('/users/username/movies/title', (req, res) => {
  res.json(userData.favorite);
});

// delete favorite request
app.delete('/users/username/movies/title', (req, res) => {
  res.send('The movie was removed from your list');
});

// delete user request
app.delete('/users/username', (req, res) => {
  res.send('Your account was deleted');
});

// serve documentation
app.use(express.static('public'));

// error-handling middleware function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});