import React from 'react'
import TodoFormEdit from "../todo_form/edit"

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: false
    }
  }

  toggleEditForm = () => {
    const { editable } = this.state

    this.setState({
      ...this.state,
      editable: !editable,
    })
  }

  handleDeleteTodo = () => {
    const { onDeleteTodo: deleteTodo } = this.props

    deleteTodo()
  }

  render() {
    const { id, completed, content, onEditTodo, onToggleStatus: toggleStatus } = this.props
    const editForm = <TodoFormEdit value={content} onEditTodo={onEditTodo} todoId={id} toggleEditForm={this.toggleEditForm} />

    return (
      <div>
        {(this.state.editable && editForm) ||
          <div>
            <input type="checkbox" onChange={() => toggleStatus()} defaultChecked={completed} />
            <span onClick={this.toggleEditForm} style={completed ? { textDecoration: "line-through" } : {}}>
              <span>{id}</span>
              <span>&nbsp;{content}</span>
            </span>
            <span onClick={this.handleDeleteTodo}>&nbsp;| X</span>
          </div>
        }
      </div>
    )
  }
}

export default TodoItem
