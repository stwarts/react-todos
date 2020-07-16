import React from "react"
import TodoItem from "../todo_item"

class TodoList extends React.Component {
  toggleStatus = (todoId) => {
    const toggleStatus = this.props.onToggleStatus

    toggleStatus(todoId)
  }

  render() {
    const todos = this.props.todos

    return (
      <ul>
        {todos.map(todo =>
          <li key={todo.id}>
            <TodoItem onToggleStatus={() => this.toggleStatus(todo.id)} id={todo.id} content={todo.content} completed={todo.completed} />
          </li>
        )}
      </ul>
    )
  }
}

export default TodoList
