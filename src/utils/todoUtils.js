export const createTodoInstance = (content) => {
  const todo = {
    id: new Date().getTime(),
    content: content,
    complete: false
  }

  return todo
}

export const filterTodos = (todos, criterion) => {
  switch (criterion) {
    case 'done':
      return todos.filter(todo => todo.completed)
    case 'incomplete':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}
