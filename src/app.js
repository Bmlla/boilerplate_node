const express = require('express');
const app = express();
const router = express.Router();
const index = require('./routes/index');

app.use('/api', index);

module.exports = app;