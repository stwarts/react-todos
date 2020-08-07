import React from "react";
import TodoList from "../todo_list"
import TodoForm from "../todo_form"
import { connect } from 'react-redux'
import { createTodo, editTodo, deleteTodo } from '../../actions/todoActions'

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

  render() {
    return (
      <div>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <TodoList
          todos={this.props.todos}
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
