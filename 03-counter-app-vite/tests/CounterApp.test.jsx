import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 100;

    test('Debe hacer match con el snapshot', () => {
        render( < CounterApp value={initialValue} />)
        expect(screen).toMatchSnapshot();
    })
    
    test('Comprobar si el valor inicial es 100', () => {
        render( < CounterApp value={initialValue} />)
        expect(screen.getByTestId('initial-counter').innerHTML).toBe("100");
    })
    
    test('Ha de restar amb el botó -1', () => {
        render( < CounterApp value={initialValue} />)
        fireEvent.click(screen.getByRole('button', {name: 'sub1'}));
        expect(screen.getByTestId('initial-counter').innerHTML).toBe((initialValue-1).toString());
    })
    
    test('Ha de fer reset amb el botó reset', () => {
        render( < CounterApp value={initialValue} />)
        fireEvent.click(screen.getByRole('button', {name: 'sub1'}));
        fireEvent.click(screen.getByRole('button', {name: 'sub1'}));
        fireEvent.click(screen.getByRole('button', {name: 'sub1'}));
        fireEvent.click(screen.getByRole('button', {name: 'reset'}));
        expect(screen.getByTestId('initial-counter').innerHTML).toBe((initialValue).toString());
    })
    
    test('Ha d\incrementar amb el botó +1', () => {
        render( < CounterApp value={initialValue} />)
        fireEvent.click(screen.getByRole('button', {name: 'add1'}));
        expect(screen.getByTestId('initial-counter').innerHTML).toBe((initialValue+1).toString());
    })
});