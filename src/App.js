import React from "react";
import TodoList from "./components/todo_list"
import TodoForm from "./components/todo_form"

const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}


const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: getTodos()
    }
  }

  createTodo = (newTodo) => {
    const todos = [...this.state.todos, newTodo]

    setTodos(todos)

    this.setState({ todos: todos })
  }

  toggleStatus = (todoId) => {
    const todos = this.state.todos.map(todo => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    })

    setTodos(todos)

    this.setState({ todos: todos })
  }

  deleteTodo = (todoId) => {
    const todos = this.state.todos
    const newTodos = todos.filter(todo => todo.id !== todoId)

    setTodos(newTodos)

    this.setState({ todos: newTodos })
  }

  editTodo = (todoId, newContent) => {
    const todos = this.state.todos

    let editedTodo

    const newTodos = todos.map(todo => {
      return todo.id === todoId ? editedTodo = { ...todo, content: newContent } : todo
    })

    setTodos(newTodos)

    this.setState({ todos: newTodos })

    return editedTodo
  }

  render() {
    return (
      <div>
        <TodoForm onCreateTodo={this.createTodo} />
        <TodoList
          todos={this.state.todos}
          onToggleStatus={this.toggleStatus}
          onEditTodo={this.editTodo}
          onDeleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default App;
