import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        email: '',
        username: ''
    })
    const {email, username} = formState;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
    //   console.log('Form initialized')
    }, [])
    
    useEffect(() => {
    //   console.log('formState changed')
    }, [formState])
    
    useEffect(() => {
    //   console.log('email changed')
    }, [email])
    

    return (
        <>
            <h1>Formulari simple</h1>
            <hr />
            <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={onInputChange}/>
            <input type="text" name="email" className="form-control mt-2" placeholder="daniel.prova@gmail.com" value={email} onChange={onInputChange}/>

            {
                (username === '1') && <Message />
            }
        </>
    )
}