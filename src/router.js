const express = require('express');
require('./db/connect');

const { addUser, serveUser } = require('./handlers');

const app = express();

app.post('/addUser/:name', addUser);

app.get('/user/:id', serveUser);

module.exports = app;
