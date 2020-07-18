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

    if (newContent && newContent.length > 0) {
      const editTodo = this.props.onEditTodo

      editTodo(newContent)

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
      <input
        onBlur={this.handleSubmit}
        onChange={this.handleContentChange}
        value={this.state.content}
        autoFocus
      />
    )
  }
}

export default TodoFormEdit
