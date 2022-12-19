import { render,screen } from "@testing-library/react";
import { Name } from "../src/NameApp";

describe('Pruebas en <NameApp />', () => {
    const nom = 'Dani'

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( < Name nom={nom} cognom='Morales' flag={true} />)
        expect(container).toMatchSnapshot();
        //console.log(container);
    })
    
    test('Debe contener el título', () => {
        render( < Name nom={nom} cognom='Morales' flag={true} />)
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain('Dani');
    })
});