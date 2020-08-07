export const setItem = (key = 'todos', value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key = 'todos') => {
  return JSON.parse(localStorage.getItem(key)) || []
}
