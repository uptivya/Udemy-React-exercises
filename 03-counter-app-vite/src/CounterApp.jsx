import {useState} from 'react'
import PropTypes from "prop-types";


export const CounterApp = ( {value} ) => {
    
    const [counter, setCounter] = useState(value);
    const handleAdd = () => setCounter(counter + 1);
    const handleMinus = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);
    
  return (
    <>
        <h1>CounterApp</h1>
        <p data-testid="initial-counter">{ counter }</p>
        <button aria-label="sub1" onClick={ handleMinus }>-1</button>
        <button aria-label="reset" onClick={ handleReset }>Reset</button>
        <button aria-label="add1" onClick={ handleAdd }>+1</button>
    </>
  )
}

CounterApp.propTypes = {
     value: PropTypes.number
}