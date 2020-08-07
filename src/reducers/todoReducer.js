import { getItem } from '../utils/localStorageAccessor'

const initialState = { todos: getItem('todos') }

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
      newTodos = [createTodoInstance(payload.content), ...state.todos]

      return {
        ...state,
        todos: newTodos
      }
    case 'TODO_EDITED':
      const { todoId, newAttributes } = payload

      newTodos = state.todos.map(todo => {
        return todo.id === todoId ? { ...todo, ...newAttributes } : todo
      })

      return {
        ...state,
        todos: newTodos
      }
    case 'TODO_DELETED':
      newTodos = state.todos.filter(todo => todo.id !== payload.todoId)

      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}
