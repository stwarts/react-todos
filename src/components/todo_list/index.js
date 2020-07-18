import React from "react"
import TodoItem from "../todo_item"

class TodoList extends React.Component {
  render() {
    const { todos, onEditTodo, onDeleteTodo, onToggleStatus } = this.props

    return (
      <div>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            completed={todo.completed}
            onToggleStatus={() => onToggleStatus(todo.id)}
            onEditTodo={(newContent => onEditTodo(todo.id, newContent))}
            onDeleteTodo={() => onDeleteTodo(todo.id)}
          />
        )}
      </div>
    )
  }
}

export default TodoList
