import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10);
    return (
        <>
            <h1 className="text-danger">Counter with hook: {counter}</h1>
            <hr className="text-danger"/>
            <button className="btn btn-danger" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-danger" onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={() => decrement(2)}>-1</button>
        </>
    )
}
