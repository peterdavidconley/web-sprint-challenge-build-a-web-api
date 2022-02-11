const express = require('express');
const server = express();
const { logger } = require('./actions/actions-middleware')

// Importing routers
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

// Configure your server here

server.use(express.json());

// Routing

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter)

// Middleware 

server.use(logger)

// testing root response

server.get('/', (req, res) => {
    res.send(`<h2>Testing root access works.</h2>`);
  });

module.exports = server;
