import { TODO_DISPATCHING_TYPES } from '../constants/todoDispatchingConstants'

export const createTodo = (content) => {
  return {
    type: TODO_DISPATCHING_TYPES.TODO_ADDED,
    payload: { content }
  }
}

export const editTodo = (todoId, newAttributes) => {
  return {
    type: TODO_DISPATCHING_TYPES.TODO_EDITED,
    payload: {
      todoId,
      newAttributes
    }
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: TODO_DISPATCHING_TYPES.TODO_DELETED,
    payload: { todoId }
  }
}
