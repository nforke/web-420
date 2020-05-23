/*
=============================================================
; Title:  user.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   23 May 2020
; Description: User model and schema
;============================================================
*/

/**
 * Fields username, password, and email
 */

//require statements
var mongoose = require('mongoose');

// define user schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

// export the model
module.exports = mongoose.model('User', userSchema);

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
};

// user.getById used to find a user by id
module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
};

/**
 * Database queries
 */