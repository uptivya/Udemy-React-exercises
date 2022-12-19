import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {

    const [show, setShow] = useState(true)

    const onShow = () => {
        setShow(!show);
    }
    
    const {increment, counter} = useCounter(1)
    return (
        <>
            <h1>Counter: <Small counter={counter} /></h1>
            <hr />
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
