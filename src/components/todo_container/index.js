import React from "react";
import TodoList from "../todo_list"
import TodoForm from "../todo_form"
import { connect } from 'react-redux'
import { createTodo, editTodo, deleteTodo } from '../../actions/todoActions'

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

  handleDeleteTodo = (todoId) => {
    this.props.deleteTodo(todoId)
  }

  handleEditTodo = (todoId, newContent) => {
    const { editTodo } = this.props

    editTodo(todoId, newContent)
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
          onEditTodo={this.handleEditTodo}
          onDeleteTodo={this.handleDeleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = {
  createTodo,
  editTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
