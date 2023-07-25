const Doctor = require('../models/doctorModel');

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error al obtener los doctores:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.createDoctor = async (req, res) => {
  const { nombre, apellido, especialidad, consultorio, correo } = req.body;

  try {
    const newDoctor = new Doctor({
      nombre,
      apellido,
      especialidad,
      consultorio,
      correo,
    });

    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error('Error al crear el doctor:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
