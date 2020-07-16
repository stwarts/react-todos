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

    const createTodo = this.props.createTodo

    const todo = {
      id: new Date().getTime(),
      content: this.state.content,
      complete: false
    }

    createTodo(todo)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleContentChange} />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
