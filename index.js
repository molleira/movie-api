// import express locally
const express = require('express');
const app = express();
 
// list of movies
let topMovies = [
    {
      title: 'The Godfather',
      director: 'Francis Ford Coppola'
    },
    {
      title: 'The Shawsank Redemption',
      director: 'Frank Darabont'
    },
    {
      title: 'Schindler\'s List',
      director: 'Steven Spielberg'
    },
    {
      title: 'Raging Bull',
      director: 'Martin Scorsese'
    },
    {
      title: 'Casablanca',
      director: 'Michael Curtiz'
    },
    {
      title: 'Citizen Kane',
      director: 'Orson Welles'
    },
    {
      title: 'Gone With The Wind',
      director: 'Victor Fleming'
    },
    {
      title: 'Wizard Of Oz',
      director: 'Victor Fleming'
    },
    {
      title: 'One Flew Over The Cuckoo\'s Nest',
      director: 'Milos Forman'
    },
    {
      title: 'Lawrence Of Arabia',
      director: 'David Lean'
    }
  ];
  
  // GET movies request
  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });
  
  // listen for requests
  app.listen(8080, () =>
    console.log('Your app is listening on port 8080.');
  );