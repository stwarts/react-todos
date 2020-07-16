import React from "react";
import TodoList from "./components/todo_list"
import TodoForm from "./components/todo_form"

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

  createTodo = (newTodo) => {
    const oldTodos = this.state.todos

    this.setState({
      todos: [...oldTodos, newTodo]
    })
  }

  toggleStatus = (todoId) => {
    const todos = this.state.todos.map(todo => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
        <TodoForm onCreateTodo={this.createTodo} />
        <TodoList onToggleStatus={this.toggleStatus} todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
