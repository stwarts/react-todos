import React from "react"

class TodoFormEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: props.value
    }
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newContent = this.state.content
    const { todoId } = this.props

    if (newContent && newContent.length > 0) {
      const editTodo = this.props.onEditTodo

      editTodo(todoId, { content: newContent })

      this.clearContent()
    }

    this.props.toggleEditForm()
  }

  clearContent = () => {
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onBlur={this.handleSubmit}
          onChange={this.handleContentChange}
          value={this.state.content}
          autoFocus
        />
      </form>
    )
  }
}

export default TodoFormEdit
