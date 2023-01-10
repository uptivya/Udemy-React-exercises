import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackExercice = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (incrementValue) => {
        setCounter((value) => value + incrementValue);
      },
      [],
    )
    

    return (
        <>
            <h1>CallbackExercice</h1>
            <hr />
            <h3>Counter: {counter}</h3>
            <ShowIncrement increment={increment}/>
        </>
    )
}
