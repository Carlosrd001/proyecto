const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola desde tu API en Docker + Render!');
});

// Ruta de suma
app.post('/suma', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a y b deben ser números' });
  }
  const resultado = a + b;
  res.json({ resultado });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
});
