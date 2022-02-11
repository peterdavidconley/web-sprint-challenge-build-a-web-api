const express = require('express');
const server = express();

// Configure your server here

server.use(express.json());

// Build your actions router in /api/actions/actions-router.js

server.use('/api/users', (req, res) => {

})

// Build your projects router in /api/projects/projects-router.js

server.use('/api/users', (req, res) => {

})

// Do NOT `server.listen()` inside this file!

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

module.exports = server;
