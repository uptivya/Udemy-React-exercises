import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Loading, QuoteItem } from "../03-examples";


export const Layout = () => {
    const initialSentParticipants = 1
    const [participants, setParticipants] = useState(initialSentParticipants);
    const [sentParticipants, setSentParticipants] = useState(initialSentParticipants);

    const {data, isLoading, hasError} = useFetch(sentParticipants);
    const {activity} = !!data && data;

    
    const onInputChange = (e) => {
        const value = e.target.value;
        setParticipants(value);
    }
    
    const onButtonClick = () => {
        const value = document.querySelector('input').value;
        setSentParticipants(value);
    }

    return (
        <>
            <h1>Layout</h1>
            <hr />
            <input type="number" name="participants" onChange={onInputChange} value={participants}/>
            { isLoading 
                ? <Loading /> 
                : <QuoteItem activity={activity} /> 
            }
            <button disabled={isLoading} className="btn btn-primary" onClick={onButtonClick}>Test the hook</button>
        </>
    )
}
