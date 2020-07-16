import React from 'react'

class TodoItem extends React.Component {
  render() {
    const { id, completed, content } = this.props

    return(
      <div>
        <span>{id}</span>
        <span>&nbsp;{completed ? "Complete" : "Incomplete"}</span>
        <span>&nbsp;{content}</span>
      </div>
    )
  }
}

export default TodoItem
