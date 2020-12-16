const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

const api = require('./api');
const middlewares = require('./middlewares');

const app = express();
const dbConnection = require('./db');

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

const allowedOrigins = ['http://localhost:3000/', '']
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },

  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  exposedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200
}));

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
