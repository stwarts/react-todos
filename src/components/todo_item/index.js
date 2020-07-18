import React from 'react'
import TodoFormEdit from "../todo_form/edit"

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: false
    }
  }

  handleClick = (e) => {
    const toggleStatus = this.props.onToggleStatus

    toggleStatus()
  }

  toggleEditForm = () => {
    const { editable } = this.state

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
    const { id, completed, content, onEditTodo } = this.props
    const editForm = <TodoFormEdit onEditTodo={onEditTodo} todoId={id} toggleEditForm={this.toggleEditForm} />

    return (
      <div>
        <input type="checkbox" onChange={this.handleClick} checked={completed}/>

        <span onClick={this.toggleEditForm} style={completed ? { textDecoration: "line-through" } : {}}>
          <span>{id}</span>
          <span>&nbsp;{completed ? "Complete" : "Incomplete"}</span>
          <span>&nbsp;{content}</span>
        </span>
        <span>
          {this.state.editable && editForm}
          <span onClick={this.handleClick}>&nbsp;Mark complete</span>
          <span onClick={this.handleDeleteTodo}>&nbsp;Delete</span>
        </span>
      </div>
    )
  }
}

export default TodoItem
