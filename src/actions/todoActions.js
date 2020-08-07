export const createTodo = (content) => {
  return {
    type: 'TODO_CREATED',
    payload: { content }
  }
}

export const editTodo = (todoId, newContent) => {
  return {
    type: 'TODO_EDITED',
    payload: { 
      todoId,
      newContent
    }
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: 'TODO_DELETED',
    payload: { todoId }
  }
}
