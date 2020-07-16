import React from 'react'

class TodoItem extends React.Component {
  handleClick = (e) => {
    const toggleStatus = this.props.onToggleStatus

    toggleStatus()
  }

  render() {
    const { id, completed, content } = this.props

    return (
      <div onClick={this.handleClick} style={completed ? { textDecoration: "line-through" } : {}}>
        <span>{id}</span>
        <span>&nbsp;{completed ? "Complete" : "Incomplete"}</span>
        <span>&nbsp;{content}</span>
      </div>
    )
  }
}

export default TodoItem
