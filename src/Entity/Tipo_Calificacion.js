const express = require('express');
const router = express.Router();

const dbConnection = require('../db');

router.get('/Consultar', (req, res) => {
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

router.get('/Consultar_Id/:idComandante/:idUser', (req, res) => { 
  dbConnection.query('select * from Tipo_Calificacion where id = '+req.params.idUser, (err, data) => {
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

router.post('/Agregar', (req, res) => { 
  dbConnection.query('Insert into Tipo_Calificacion (Nombre) values ("' + req.body.nombre + '")', (err, data) => {
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

router.delete('/Eliminar', (req, res) => { 
  dbConnection.query('delete from Tipo_Calificacion where id = ' + req.body.id , (err, data) => {
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

router.patch('/Actualizar', (req, res) => { 
  dbConnection.query('update Tipo_Calificacion set  Nombre = "'+ req.body.nombre +'" where id = ' + req.body.id , (err, data) => {
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
