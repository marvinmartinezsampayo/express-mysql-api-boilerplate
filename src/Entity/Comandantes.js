const express = require('express');
const router = express.Router();

const dbConnection = require('../db');

router.get('/Consultar', (req, res) => {
  dbConnection.query('select * from Comandante;', (err, data) => {
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

router.get('/Consultar_Id/:idUser', (req, res) => { 
  dbConnection.query('select * from Comandante where id = '+req.params.idUser, (err, data) => {
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
  dbConnection.query('Insert into Comandante (Nombres,P_Apellido,S_Apellido,Identificacion,Grado,Nivel_Academico) values ("' + req.body.nombres + '","'+ req.body.p_apellido +'","'+ req.body.s_apellido +'",'+ req.body.identificacion +','+req.body.grado +',"'+ req.body.nivel_academico +'")', (err, data) => {
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
  dbConnection.query('delete from Comandante where id = ' + req.body.id , (err, data) => {
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
  dbConnection.query('update Comandante set  Nombres = "'+ req.body.nombres +'", P_Apellido = "'+ req.body.p_apellido +'", S_Apellido = "'+ req.body.s_apellido  +'", Identificacion = '+ req.body.identificacion  +', Grado = '+ req.body.grado +' , Nivel_Academico = "' + req.body.nivel_Academico + '" where  id ='+ req.body.id  , (err, data) => {       
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