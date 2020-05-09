/*
=============================================================
; Title:  authController.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   08 May 2020
; Description: api-gateway authController file
;============================================================
*/

// require statement
var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req,res) {
  res.send('NOT IMPLEMENTED: User registration POST');
};

// verify token on GET
exports.user_token = function(req,res) {
  res.send('NOT IMPLEMENTED: User token lookup GET');
};