import React from "react";
import TodoList from "../todo_list"
import TodoForm from "../todo_form"
import { connect } from 'react-redux'
import { createTodo } from '../../actions/todoActions'

const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

class TodoContainer extends React.Component {
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

  handleCreateTodo = (content) => {
    const { createTodo } = this.props

    createTodo(content)
  }

  render() {
    return (
      <div>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <TodoList
          todos={this.props.todos}
          onToggleStatus={this.toggleStatus}
          onEditTodo={this.editTodo}
          onDeleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = {
  createTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
