import { render } from "@testing-library/react";
import { Name } from "../src/NameApp";

describe('Pruebas en <NameApp />', () => {
    const nom = 'Dani'

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( < Name nom={nom} cognom='Morales' flag={true} />)
        //console.log(container);
    })
    
    test('Debe contener el título', () => {
        const { container, getByText, getByTestId } = render( < Name nom={nom} cognom='Morales' flag={true} />)
        expect( getByText('Sí, sóc en Dani Morales') ).toBeTruthy();
        expect( getByTestId('h1test') ).toBeTruthy();
        expect( getByTestId('h1test').innerHTML ).toContain('Danu');
        

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(nom);
    })
});