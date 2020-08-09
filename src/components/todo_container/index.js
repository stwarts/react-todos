import React from "react";
import TodoList from "../todo_list"
import TodoForm from "../todo_form"
import TodoFilter from "../todoFilter"
import { connect } from 'react-redux'
import { createTodo, editTodo, deleteTodo } from '../../actions/todoActions'
import { filterTodos, countTodos } from '../../utils/todoUtils'

class TodoContainer extends React.Component {
  handleDeleteTodo = (todoId) => {
    this.props.deleteTodo(todoId)
  }

  handleEditTodo = (todoId, newAttributes) => {
    const { editTodo } = this.props

    editTodo(todoId, newAttributes)
  }

  handleCreateTodo = (content) => {
    const { createTodo } = this.props

    createTodo(content)
  }

  render() {
    const { currentFilter, todos } = this.props

    return (
      <div>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <TodoFilter incompleteCount={countTodos(todos, 'incomplete')}/>
        <TodoList
          todos={filterTodos(todos, currentFilter)}
          onEditTodo={this.handleEditTodo}
          onDeleteTodo={this.handleDeleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos, currentFilter }) => {
  return {
    currentFilter,
    todos
  }
}

const mapDispatchToProps = {
  createTodo,
  editTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
