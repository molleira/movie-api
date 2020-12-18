// import mongoose locally
const mongoose = require('mongoose');
  bcrypt = require('bcrypt');

// movie schema
let movieSchema = mongoose.Schema({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String,
    Birth: Number,
    Death: Number
  },
  ImagePath: String,
  Featured: Boolean
});

// user schema
let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

// hash and validate password schemas
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.Password);
};

// create models
let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

// export schemas to be used on index.js
module.exports.Movie = Movie;
module.exports.User = User;