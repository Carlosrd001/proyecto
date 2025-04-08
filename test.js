const suma = require("./app");

test("Debe sumar 2 + 3 y devolver 5", () => {
  expect(suma(2, 3)).toBe(5);
});
