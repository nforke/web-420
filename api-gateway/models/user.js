/*
=============================================================
; Title:  user.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   08 May 2020
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

/**
 * Database queries
 */