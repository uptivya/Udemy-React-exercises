import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en la función getSaludo()', () => {
    test('Test de prueba', () => {
        const nom = 'Dani';
        const funcioTest = getSaludo(nom);
        expect(funcioTest).toBe(`Hola ${ nom }!`);
    })
})