import React from "react";
import TodoList from "../todo_list"
import TodoForm from "../todo_form"
import TodoFilter from "../todoFilter"
import { connect } from 'react-redux'
import { createTodo, editTodo, deleteTodo, changeFilter } from '../../actions/todoActions'

class TodoContainer extends React.Component {
  handleDeleteTodo = (todoId) => {
    this.props.deleteTodo(todoId)
  }

  handleEditTodo = (todoId, newAttributes) => {
    const { editTodo } = this.props

    editTodo(todoId, newAttributes)
  }

  handleCreateTodo = (content) => {
    const { createTodo } = this.props

    createTodo(content)
  }

  fitlerTodos = (todos) => {
    switch (this.props.currentFilter) {
      case 'done':
        return todos.filter(todo => todo.completed)
      case 'incomplete':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }

  render() {
    const { currentFilter, todos } = this.props
    const { changeFilter } = this.props

    return (
      <div>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <TodoFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
        <TodoList
          todos={this.fitlerTodos(todos)}
          onEditTodo={this.handleEditTodo}
          onDeleteTodo={this.handleDeleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos, currentFilter }) => {
  return {
    currentFilter,
    todos
  }
}

const mapDispatchToProps = {
  createTodo,
  editTodo,
  deleteTodo,
  changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
