import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Testing 05-funciones.js', () => {
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );

    })
    
    test('getUserActivo debe retornar un objeto', () => {

        const nom = 'Dani';
        const testUser2 = {
            uid: 'ABC567',
            username: nom
        }

        const user2 = getUsuarioActivo(nom)

        expect(testUser2).toEqual(user2)
    })
})