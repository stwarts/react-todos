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

const initialState = getTodos()

const reducer2BCalled = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case 'CREATE_TODO':
      console.log('creating todo')
      return state
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
