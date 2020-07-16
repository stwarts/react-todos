import React from 'react';
import TodoList from './components/todo_list'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          id: 1,
          content: "Test",
          completed: false
        },
        {
          id: 2,
          content: "Test 2",
          completed: true
        }
      ]
    }
  }

  render() {
    return(
      <TodoList todos={this.state.todos}/>
    )
  }
}

export default App;
