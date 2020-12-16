const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const api = require('./api');
const middlewares = require('./middlewares');

const app = express();
const dbConnection = require('./db');

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the mysql-express api 🧐',
    next: 'Go to /api/v1 to start interacting 🥳',
  });
});

app.use('/api/v1', api);

app.use(middlewares.errorHandler);
app.use(middlewares.notFound);

module.exports = app;
