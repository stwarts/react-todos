import React from "react"

class TodoFormEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ""
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

      const todo = editTodo(newContent)

      this.props.toggleEditForm()

      this.clearContent()
    }
  }

  clearContent = () => {
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onBlur={this.handleSubmit} onChange={this.handleContentChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default TodoFormEdit
