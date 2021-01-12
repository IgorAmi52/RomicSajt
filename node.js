const http = require('http');
const debug = require("debug")("zanr");
const express = require('./Beckend/app');


const server = http.createServer(express)
.listen(3000 || process.env.PORT);
