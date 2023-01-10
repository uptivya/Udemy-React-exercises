import { TodoItem } from "./TodoItem"

export const TodoList = ({todos, onRemoveTodo, onToggleTodo}) => {
  console.log(todos);
  return (
    <ul className="col-7 list-group">
        {
            todos.map ((todo) => (
                <TodoItem todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
            ))
        }
    </ul>
  )
}
