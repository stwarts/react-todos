import React from 'react'

class TodoItem extends React.Component {
  handleClick = (e) => {
    const toggleStatus = this.props.onToggleStatus

    toggleStatus()
  }

  handleEditTodo = () => {
    const editTodo = this.props.onEditTodo

    editTodo()
  }

  handleDeleteTodo = () => {
    const deleteTodo = this.props.onDeleteTodo

    deleteTodo()
  }

  render() {
    const { id, completed, content } = this.props

    return (
      <div>
        <span onClick={this.handleClick} style={completed ? { textDecoration: "line-through" } : {}}>
          <span>{id}</span>
          <span>&nbsp;{completed ? "Complete" : "Incomplete"}</span>
          <span>&nbsp;{content}</span>
        </span>
        <span>
          <span onClick={this.handleEditTodo}>&nbsp;Edit</span>
          <span onClick={this.handleDeleteTodo}>&nbsp;Delete</span>
        </span>
      </div>
    )
  }
}

export default TodoItem
