import { useState } from "react";

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
    });

    const {counter1, counter2, counter3} = counter;

    const buttonAbility= (ability, button) => {
        const selectedButton = document.querySelector('[name="'+button+'"]');
        switch(ability){
            case 'disable':
                selectedButton.disabled = true;
            case 'enable':
                selectedButton.disabled = false;
        }
    }

    const addCounter = () => {
        if(counter1 < 10){
            buttonAbility('enable','substract');
            setCounter({
                ...counter,
                counter1 : counter1 + 1
            });
        }
        /* else{
            buttonAbility('disable','add');
        } */

    }

    const substractCounter = () => {
        if (counter1 > 0){
            buttonAbility('enable','add');
            setCounter({
                ...counter,
                counter1 : counter1 - 1, 
            });
        }/* else{
            buttonAbility('disable','substract');
        } */
    }

    return (
        <>
            <h2>Counter1: {counter1} (From 0 to 10)</h2>
            <h2>Counter2: {counter2}</h2>
            <h2>Counter3: {counter3}</h2>
            <hr />
            <button name="add" className="btn btn-primary" onClick={addCounter}>+1</button>
            <button name="substract" className="btn btn-primary" onClick={substractCounter}>-1</button>
        </>
    )
}
