import React from "react";
import TodoContainter from "./components/todo_container"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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

const reducer2BCalled = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TODO_CREATED':
      return {
        todos: [...state.todos, createTodoInstance(payload.content)]
      }
    default:
      return state
  }
}

const store = createStore(reducer2BCalled)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoContainter />
      </Provider>
    )
  }
}

export default App;
