const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola desde tu API en Docker + Render!');
});

app.post('/suma', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a y b deben ser números' });
  }
  const resultado = a + b;
  res.json({ resultado });
});

module.exports = app;
