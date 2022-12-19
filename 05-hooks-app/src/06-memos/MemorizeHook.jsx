import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Memorize } from "./Memorize"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++){
        console.log('There we go!')
    }

    return `${iterationNumber} iteracions realitzades`
}

export const MemoHook = () => {

    const [show, setShow] = useState(true)

    const onShow = () => {
        setShow(!show);
    }

    const {increment, counter} = useCounter(1)
    const memoridezValue = useMemo(() => heavyStuff(5000), [counter]);
    
    return (
        <>
            <h1>Memo Hook Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memoridezValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
            <button onClick={onShow} className='btn btn-outline-primary'>
                Show true/false {JSON.stringify(show)}
            </button>
        </>
    )
}
