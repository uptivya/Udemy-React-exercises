export const TodoItem = ({todo, onRemoveTodo, onToggleTodo}) => {
  
    const {description, done} = todo;

    console.log(done);
  
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center mb-1">
            <span className={(done) ? 'text-decoration-line-through' : ''} onDoubleClick={() => onToggleTodo(todo.id)}>{description}</span>
            <button className="btn btn-outline-danger" onClick={() => onRemoveTodo(todo.id)}>Borrar</button>
        </li>
    )
}
