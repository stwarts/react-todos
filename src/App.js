import React from "react";
import TodoContainter from "./components/todo_container"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoReducer } from './reducers/todoReducer'
import { setItem } from './utils/localStorageAccessor'

const store = createStore(todoReducer)

store.subscribe(() => {
  const { todos } = store.getState()

  setItem('todos', todos)
})

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
