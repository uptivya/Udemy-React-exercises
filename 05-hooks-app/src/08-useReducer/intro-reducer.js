const initialState = [{
    id: 1,
    todo: 'Trobar feina',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TODO] - Add new todo':
            return [...state, action.payload];
    
        default:
            return state;
    }
}

let newTodo = {
    id: 2,
    todo: 'Cobrar money',
    done: false
}

const addTodo = {
    type: '[TODO] - Add new todo',
    payload: newTodo
}

let todos = todoReducer(initialState, addTodo);

console.log(todos);