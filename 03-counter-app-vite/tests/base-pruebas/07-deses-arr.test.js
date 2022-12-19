import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07 deses arr', () => {
    test('should retornaArreglo tornar una array', () => { 
        const [testString, testNumber] = retornaArreglo();

        const testArray = ['ABC', 123];

        const string = 'ABC'
        const number = 123

        expect(testNumber).toEqual(expect.any(Number));
    })
})





