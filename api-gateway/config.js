/*
=============================================================
; Title:  config.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   08 May 2020
; Description: api-gateway config file
;============================================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

// public key
config.web.secret = 'topsecret';

// export the config
module.exports = config;