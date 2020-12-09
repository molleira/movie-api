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
mongoose.connect('mongodb://localhost:27017/myFlixDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
  
// use morgan to log requests
app.use(morgan('common'));

// welcome request
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

// return a list of all movies to the user
app.get('/movies', (req, res) => {
  Movies.find()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// return data about a single movie by title
app.get('/movies/:Title', (req, res) => {
  Movies.findOne({ Title: req.params.Title })
    .then((movie) => {
      res.status(201).json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// return data about a genre by name
app.get('/movies/genres/:Name', (req, res) => {
  Movies.findOne({ "Genre.Name": req.params.Name })
  .then((movie) => {
    res.status(201).json(movie.Genre);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error: " + err);
  });
});

// return data about a director by name
app.get('/movies/directors/:Name', (req, res) => {
  Movies.findOne({ "Director.Name": req.params.Name })
    .then((movie) => {
      res.status(201).json(movie.Director);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error: " + err);
  });
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