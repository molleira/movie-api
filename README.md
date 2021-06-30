# Movie API

This project is the server-side component for an application called “myFlix” that interacts with a database that stores data about movies. It consists of a well-designed REST API and architected database built using **JavaScript**, **Node.js**, **Express**, and **MongoDB**. It is used in the myFlix clients to provide movie information and allow users to create accounts and save their favorite movies.

### About
The API uses middleware modules, such as the *body-parser* package for reading data from requests and *morgan* for logging. The business logic was modeled with *Mongoose*. The information provided is in *JSON* format. It includes user authentication and authorization code, data validation logic and meets data security regulations.

The REST API is hosted on *Heroku* and is accessed via commonly used HTTP methods like GET and POST. Similar methods (CRUD) will be used to retrieve data from your database and store that data in a non-relational way. The endpoints were tested using *Postman*.

### Development
In the future I would like to improve the API addind more collections to offer more and better information.

### Usage
Please let me know if you would like to access the information on this API. I'll be happy to get in touch and help with whatever you need.

### Documentation
Read more about the API endpoints [in this link](https://theflix.herokuapp.com/documentation.html).

### Features
  * return a list of all movies
  * return information about a single movie by its title
  * return information about a movie's genre
  * return information about a movie's director
  * allow a user to sign up
  * allow a user to update their profile information
  * allow a user to add a movie to their favorities
  * allow a user to remove a movie from their favorites
  * allow a user to delete their account

### Client Applications Using this API
[myFlix React App](https://theflix.netlify.app/)</br>
[myFlix Angular App](https://molleira.github.io/myFlix-Angular-client/welcome)
