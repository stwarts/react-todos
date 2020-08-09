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

export const countTodos = (todos, criterion) => {
  switch (criterion) {
    case 'done':
      const doneReducer = (count, todo) => (todo.completed && count + 1)
      return todos.reduce(doneReducer, 0)
    case 'incomplete':
      const incompleteReducer = (count, todo) => (!todo.completed ? count + 1:  count)
      return todos.reduce(incompleteReducer, 0)
    default:
      return todos.length
  }
}
