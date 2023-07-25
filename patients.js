const express = require('express');
const router = express.Router();

const Patient = require('../models/patientModel');

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error al obtener los pacientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/', async (req, res) => {
  const { nombre, cedula, apellido, edad, telefono } = req.body;

  try {
    const newPatient = new Patient({
      nombre,
      cedula,
      apellido,
      edad,
      telefono,
    });

    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    console.error('Error al crear el paciente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
