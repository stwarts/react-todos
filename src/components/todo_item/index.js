import React from 'react'
import TodoFormEdit from "../todo_form/edit"

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editable: false
    }
  }

  handleToggleStatus = () => {
    const { todo, onEditTodo } = this.props

    onEditTodo(todo.id, { completed: !todo.completed})
  }

  toggleEditForm = () => {
    const { editable } = this.state

    this.setState({
      ...this.state,
      editable: !editable,
    })
  }


  render() {
    const { todo, onEditTodo, onDeleteTodo, onToggleStatus } = this.props
    const editForm = (
      <TodoFormEdit
        value={todo.content}
        onEditTodo={onEditTodo}
        todoId={todo.id}
        toggleEditForm={this.toggleEditForm} 
      />
    )

    return (
      <div>
        {(this.state.editable && editForm) ||
          <div>
            <input
              type="checkbox"
              onChange={this.handleToggleStatus}
              defaultChecked={todo.completed}
            />

            <span onClick={this.toggleEditForm} style={todo.completed ? { textDecoration: "line-through" } : {}}>
              <span>{todo.content}</span>
            </span>
            <span onClick={() => onDeleteTodo(todo.id)}>&nbsp;| X</span>
          </div>
        }
      </div>
    )
  }
}

export default TodoItem
