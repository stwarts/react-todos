import React from "react"

class TodoForm extends React.Component {
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
      const createTodo = this.props.onCreateTodo

      createTodo(newContent)

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
          <input onChange={this.handleContentChange} value={this.state.content} />
          <button style={{ display: "none" }}>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
