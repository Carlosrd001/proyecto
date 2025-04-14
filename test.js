// test.js

const { suma, resta } = require('./calculadora')

test('suma 2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('resta 5 - 2 es igual a 3', () => {
  expect(resta(5, 2)).toBe(3);
});
