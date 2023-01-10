import { useForm } from "../hooks/useForm";

export const AddTodoForm = ({onNewTodo}) => {

    const initialForm = {
        description: ''
    }

    const {description, formState, onInputChange, onFormReset} = useForm(initialForm);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (description.length <= 0) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
        onFormReset();
    }

    return (
        <form>
            <input type="text" placeholder="New todo" name="description" className="form-control" onChange={onInputChange} value={description} />
            <button type="submit" className="btn btn-outline-primary mt-3" onClick={onFormSubmit}>Afegir</button>
        </form>
    )
}
