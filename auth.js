// sets token as variable
const jwtSecret = 'your_jwt_secret';

// requires jwt and passport
jwt = require('jsonwebtoken'),
  passport = require('passport');

// local passport file
require('./passport');

// generates token
let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // username being encoded in jwt
    expiresIn: '7d', // specifies token expiration in days
    algorithm: 'HS256' // algorithm used to sign or encode the values of the jwt
  });
}

// POST login
module.exports = (router) => {
  router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
        console.log({ error })
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
}
