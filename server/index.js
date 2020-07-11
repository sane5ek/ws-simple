#!/usr/bin/env node


// const app = require('./../app');
const createWebSocketServer = require('./websocket');
const http = require('http');

const port = process.env.PORT || 80;
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });


createWebSocketServer(http.createServer().listen(port));
