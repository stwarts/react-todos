import React from "react";
import TodoContainter from "./components/todo_container"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todoReducer } from './reducers/todoReducer'

const store = createStore(todoReducer)

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
