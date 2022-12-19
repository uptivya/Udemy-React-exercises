import { useLayoutEffect, useRef, useState } from "react"

export const QuoteItem = ({activity}) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        //console.log(pRef.current.getBoundingClientReact());
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height})
    }, [activity])
    
    return (
        <>
            <br />
            {
                activity 
                    ? (<p ref={pRef} className="blockquote">If you are bored, you could <u>{activity}</u></p>)
                    : (<p ref={pRef} className="blockquote">There are no activities with the selected participants</p>)
            }
            <p>The width of the text is: {boxSize.width}</p>
            <p>The height of the text is: {boxSize.height}</p>
        </>
    )
}
