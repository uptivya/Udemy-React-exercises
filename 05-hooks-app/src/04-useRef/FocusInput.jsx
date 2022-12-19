import { useRef } from "react"

export const FocusInput = () => {
    const input = useRef()

    const focusInput = () => {
        input.current.select();
    }

    return (
        <>
            <h1>Focus input</h1>
            <hr />
            <input ref={input} type="text" className="form-control" placeholder="Write your name"/>
            <button className="btn btn-primary mt-3" onClick={focusInput}>Focus the input</button>
        </>
    )
}
