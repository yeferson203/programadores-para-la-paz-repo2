const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Ruta /registro
app.post('/registro', (req, res) => {

  console.log('Datos recibidos:', req.body);

  if (!req.body) {
    return res.status(400).json({
      error: 'No se recibieron datos JSON'
    });
  }

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: 'Datos recibidos',
    nombre: nombre,
    mensaje: mensaje
  });

});

// Ruta /incidencia
app.post('/incidencia', (req, res) => {

  console.log('Incidencia recibida:', req.body);

  if (!req.body) {
    return res.status(400).json({
      error: 'No se recibieron datos JSON'
    });
  }

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: 'Incidencia registrada',
    tipo: tipo,
    descripcion: descripcion
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});