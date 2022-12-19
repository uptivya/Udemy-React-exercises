import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test sobre l\'arxiu async await', () => {
    test('Hauria de rebre l\'URL d\'una imatge random de Giphy', async() => {
        const URL = await getImagen();
        expect( typeof URL ).toBe( 'string' )
    })
} )