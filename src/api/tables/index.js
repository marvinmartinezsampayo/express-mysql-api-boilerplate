const express = require('express');
const router = express.Router();

const dbConnection = require('../../db');

router.get('/', (req, res) => {
  dbConnection.query('SELECT table_name FROM information_schema.tables;', (err, data) => {
    if (err) {
      console.log('The: ', err);
      res.status(500).json({
        error: err
      });
    }
    else {
      res.status(200).json({
        availableTables: data,
      })
    }
  });
});

module.exports = router;
