describe('Pruebas en el componente de pruebas', () => {
    test('Test de prueba', () => {
        const message = 'Hola bon dia  ';
        const message2 = message.trim();
        expect(message).toBe(message2);
    })
})