const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const initialState = { todos: getTodos() }

const createTodoInstance = (content) => {
  const todo = {
    id: new Date().getTime(),
    content: content,
    complete: false
  }

  return todo
}

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TODO_CREATED':
      return {
        todos: [...state.todos, createTodoInstance(payload.content)]
      }
    default:
      return state
  }
}
