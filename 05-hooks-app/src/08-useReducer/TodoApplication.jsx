import { useTodos } from "../hooks";
import { AddTodoForm, TodoList } from "./";

export const TodoApplication = () => {
    const {todos, todosCount, pendingTodosCount, handleAddTodo, handleRemoveTodo, handleToggleTodo} = useTodos();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Todo App: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo} />
                    <div className="col-5">
                        <h4>Add todo</h4>
                        <hr />
                        <AddTodoForm onNewTodo={handleAddTodo} />
                    </div>
                </div>
            </div>
        </>
    )
}
