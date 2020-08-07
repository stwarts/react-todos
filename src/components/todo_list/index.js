import React from "react"
import TodoItem from "../todo_item"

class TodoList extends React.Component {
  render() {
    const { todos, onEditTodo, onDeleteTodo } = this.props

    return (
      <div>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        )}
      </div>
    )
  }
}

export default TodoList
