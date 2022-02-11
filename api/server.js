const express = require('express');
const server = express();

// Configure your server here

server.use(express.json());

// Middleware #1

server.use('/api/users', (req, res) => {

})

// Middleware #2

server.use('/api/users', (req, res) => {

})

server.get('/', (req, res) => {
    res.send(`<h2>Testing root access works.</h2>`);
  });

module.exports = server;
