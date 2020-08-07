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
  let newTodos

  switch (type) {
    case 'TODO_CREATED':
      newTodos = [...state.todos, createTodoInstance(payload.content)]

      return {
        ...state,
        todos: newTodos
      }
    case 'TODO_EDITED':
      const { id: todoId, newContent } = payload

      newTodos = state.todos.map(todo => {
        return todo.id === todoId ? { ...todo, content: newContent } : todo
      })

      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}
