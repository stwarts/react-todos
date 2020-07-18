import React from "react"
import TodoItem from "../todo_item"

class TodoList extends React.Component {
  toggleStatus = (todoId) => {
    const toggleStatus = this.props.onToggleStatus

    toggleStatus(todoId)
  }

  deleteTodo = (todoId) => {
    const deleteTodo = this.props.onDeleteTodo

    deleteTodo(todoId)
  }

  editTodo = (todoId, newContent) => {
    const editTodo = this.props.onEditTodo

    editTodo(todoId, newContent)
  }

  render() {
    const todos = this.props.todos

    return (
      <div>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            completed={todo.completed}
            onToggleStatus={() => this.toggleStatus(todo.id)}
            onEditTodo={(newContent => this.editTodo(todo.id, newContent))}
            onDeleteTodo={() => this.deleteTodo(todo.id)}
          />
        )}
      </div>
    )
  }
}

export default TodoList
