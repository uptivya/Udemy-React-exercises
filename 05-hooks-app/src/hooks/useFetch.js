import { useEffect, useState } from "react";

export const useFetch = (participants) => {
    const url = `https://www.boredapi.com/api/activity?participants=${participants}`

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const fetchFunct = async() => {
        
        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            ...state,
            data,
            isLoading: false
        })
    }

    useEffect(() => {
        if(participants > 0){
            fetchFunct();
        }
    }, [participants]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
    
}
