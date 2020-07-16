import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 1,
      content: "Test",
      completed: false
    }
  }

  render() {
    return(
      <div>
        <span>{this.state.completed ? "Complete" : "Incomplete"}</span>
        <span>&nbsp;{this.state.content}</span>
      </div>
    )
  }
}

export default TodoItem
