const Appointment = require('../models/appointmentModel');

// Obtener todas las citas médicas
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error al obtener las citas médicas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Crear una nueva cita médica
exports.createAppointment = async (req, res) => {
  const { numeroDocumentoPaciente, especialidad } = req.body;

  try {
    const newAppointment = new Appointment({
      numeroDocumentoPaciente,
      especialidad,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Error al crear la cita médica:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
