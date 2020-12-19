const express = require('express');
const router = express.Router();

const dbConnection = require('../../db');

router.get('/', (req, res) => {
  dbConnection.query('select * from Tipo_Calificacion;', (err, data) => {
    if (err) {
      console.log('The: ', err);
      res.status(500).json({
        error: err
      });
    }
    else {
      res.status(201).json(data)
    }
  });
});

module.exports = router;
