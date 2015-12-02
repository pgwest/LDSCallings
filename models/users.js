// setup Mongoose
import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import findOrCreate from 'mongoose-findorcreate';

// setup bcrypt
import bcrypt from 'bcrypt';
var SALT = bcrypt.genSaltSync();

// setup json web token
import jwt from 'jsonwebtoken';
var SECRET = '\x1f\x1e1\x8a\x8djO\x9e\xe4\xcb\x9d`\x13\x02\xfb+\xbb\x89q"F\x8a\xe0a';

// User info, with items owned by that user
var userSchema = new Schema({
  name: String,
  username: {type: String, index: true, unique: true},
  password_hash: String,
});

// hash the password
userSchema.methods.set_password = function(password) {
  this.password_hash = bcrypt.hashSync(password, SALT);
};

// check the password
userSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password,this.password_hash);
};

// Generate a token for a client
userSchema.statics.generateToken = function(username) {
  return jwt.sign({ username: username }, SECRET);
};

// Verify the token from a client. Call the callback with a user object if successful or null otherwise.
userSchema.statics.verifyToken = function(token,cb) {
  if (!token) {
    cb(null);
    return;
  }
  // decrypt the token and verify that the encoded user id is valid
  jwt.verify(token, SECRET, function(err, decoded) {
    if (!decoded) {
      cb(null);
      return;
    }
    User.findOne({username: decoded.username},function(err,user) {
      if (err) {
	cb(null);
      } else {
	cb(user);
      }
    });
  });
};

// add findOrCreate
userSchema.plugin(findOrCreate);

// create user
var User = mongoose.model('users', userSchema);

module.exports = User;