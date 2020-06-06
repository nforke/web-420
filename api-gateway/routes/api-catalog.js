/*
=============================================================
; Title:  api-catalog.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   06 June 2020
; Description: api-gateway catalog
;============================================================
*/

/**
 * API Routes
 */
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

// POST request to allow user login requests
router.post('/auth/login', auth_controller.user_login);

// GET request to allow user to logout requests
router.get('/auth/logout', auth_controller.user_logout);

// export the catalog
module.exports = router;