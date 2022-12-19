import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {onInputChange,onFormReset,email,username,password} = useForm({
        email: '',
        username: '',
        password: ''
    });

    // Es lo mismo a desestructurar los valores directamente arriba con el ...formState en el return del custom hook
    // const {email, username, password} = formState;

    return (
        <>
            <h1>Formulari amb custom hook</h1>
            <hr />
            <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={onInputChange}/>
            <input type="text" name="email" className="form-control mt-2" placeholder="daniel.prova@gmail.com" value={email} onChange={onInputChange}/>
            <input type="password" name="password" className="form-control mt-2" placeholder="Contrassenya" value={password} onChange={onInputChange}/>
            <button className="btn btn-primary mt-4" onClick={onFormReset}>Reset</button>
        </>
    )
}