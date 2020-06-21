/*
======================================================
; Title: Assignment 8.4
; Author: Nicole Forke
; Date: 21 June 2020
; Modified By: Nicole Forke
; Description: API Gateway Part V - Check-Token File
======================================================
*/

// require statements
var jwt = require('jsonwebtoken');
var config = require('./config');

/**
 * Check the HTTP header for a valid JSON web token
 * @param req
 * @param res
 * @param next
 */

 // check-token function
 function checkToken(req, res, next) {

   //access the request headers
   var token = req.headers['x-access-token'];

  // check if its null
   if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.'});

    // verify the token
    jwt.verify(token, config.web.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});
      //assignment
      req.userId = decoded.id;
      next();
    });
 }

 //export the function
 module.exports = checkToken;

