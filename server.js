"use strict";

var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer();
var app = express();

app.use(express.static('resources'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(process.env.PORT);
