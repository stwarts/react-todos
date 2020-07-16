import React from "react"
import TodoItem from "../todo_item"

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          id: 1,
          content: "Test",
          completed: false
        }
      ]
    }
  }

  render() {
    return(
      <div>
        {this.state.todos.map(todo => <TodoItem id={todo.id} content={todo.content} completed={todo.completed}/>)}
      </div>
    )
  }
}

export default TodoList
