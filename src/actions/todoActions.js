export const createTodo = (content) => {
  return {
    type: 'TODO_CREATED',
    payload: { content }
  }
}

