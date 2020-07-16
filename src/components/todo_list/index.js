import React from "react"
import TodoItem from "../todo_item"

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos

    return (
      <ul>
        {todos.map(todo =>
          <li>
            <TodoItem id={todo.id} content={todo.content} completed={todo.completed} />
          </li>
        )}
      </ul>
    )
  }
}

export default TodoList
