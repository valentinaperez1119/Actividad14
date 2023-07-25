const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  nombre: { type: String, required: true },
  cedula: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
