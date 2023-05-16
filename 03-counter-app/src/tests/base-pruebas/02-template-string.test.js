import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-templete-string.test.js', () => {

  test('getSaludo debe retornar "Hola (nombre)"', () => {

    const nombre = "Roberto";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);

  });

  // getSaludo debe retornar Hola Carlos! si no hay argumento nombre
  test('getSaludo debe retornar "Hola Carlos!" si no hay argumento nombre', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Carlos!');
  });

});