/*
=============================================
; Title: Assignment 4.3
; Author: Nicole Forke
; Date: 22 May 2020
; Modified By: Nicole Forke
; Description: API-Gateway Part III
=============================================
*/

// require statements
var express = require('express');

// routes
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
