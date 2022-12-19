import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Testos de promeses async', () => {
    test('M\'hauria de retornar l\'heroi segons l\'Id', (done) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then(heroResponse => {
                expect(heroResponse).toBeFalsy();
                done()
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
    });
})
