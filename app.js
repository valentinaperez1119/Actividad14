const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/first', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

const Doctor = require('./models/doctorModel');
app.post('/doctors', (req, res) => {
});


app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${258}`);
});
