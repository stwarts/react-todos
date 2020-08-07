import { getItem } from '../utils/localStorageAccessor'
import { createTodoInstance } from '../utils/todoUtils'
import { TODO_DISPATCHING_TYPES as DISPATCHING } from '../constants/todoDispatchingConstants'

const initialState = { todos: getItem('todos') }

export const todoReducer = (state = initialState, { type, payload }) => {
  let newTodos

  switch (type) {
    case DISPATCHING.TODO_CREATED:
      newTodos = [createTodoInstance(payload.content), ...state.todos]

      return {
        ...state,
        todos: newTodos
      }
    case DISPATCHING.TODO_EDITED:
      const { todoId, newAttributes } = payload

      newTodos = state.todos.map(todo => {
        return todo.id === todoId ? { ...todo, ...newAttributes } : todo
      })

      return {
        ...state,
        todos: newTodos
      }
    case DISPATCHING.TODO_DELETED:
      newTodos = state.todos.filter(todo => todo.id !== payload.todoId)

      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}
