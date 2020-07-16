import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: false,
      newContent: "newContent"
    }
  }

  handleClick = (e) => {
    const toggleStatus = this.props.onToggleStatus

    toggleStatus()
  }

  handleEditTodo = () => {
    const { editable } = this.state

    if (editable) {
      const editTodo = this.props.onEditTodo

      editTodo(this.state.newContent)
    }

    this.setState({
      ...this.state,
      editable: !editable,
    })
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
          <span onClick={this.handleEditTodo}>&nbsp;{this.state.editable ? "Commit" : "Edit"}</span>
          <span onClick={this.handleDeleteTodo}>&nbsp;Delete</span>
        </span>
      </div>
    )
  }
}

export default TodoItem
