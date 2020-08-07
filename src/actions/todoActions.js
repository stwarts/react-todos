export const createTodo = (content) => {
  return {
    type: 'TODO_CREATED',
    payload: { content }
  }
}

export const editTodo = (id, newContent) => {
  return {
    type: 'TODO_EDITED',
    payload: { 
      id,
      newContent
    }
  }
}
