const express = require('express');
const helmet = require('helmet');
const recipeRouter = require('./recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipeRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
