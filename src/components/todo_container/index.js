import React from "react";
import TodoList from "../todo_list"
import TodoForm from "../todo_form"
import { connect } from 'react-redux'
import { createTodo, editTodo, deleteTodo } from '../../actions/todoActions'

class TodoContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: 'all'
    }
  }

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

  changeFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  fitlerTodos = (todos) => {
    switch (this.state.filter) {
      case 'done':
        return todos.filter(todo => todo.completed)
      case 'incomplete':
        return todos.filter(todo => !todo.completed)
      default: 
        return todos
    }
  }

  render() {
    return (
      <div>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <label>
          <input
            type="radio"
            value='all'
            onChange={this.changeFilter}
            checked={this.state.filter === 'all'}
          /> All
        </label>

        <label>
          <input
            type="radio"
            value='done'
            onChange={this.changeFilter}
            checked={this.state.filter === 'done'}
          /> Done
        </label>

        <label>
          <input
            type="radio"
            value='incomplete'
            onChange={this.changeFilter}
            checked={this.state.filter === 'incomplete'}
          /> Incomplete
        </label>

        <TodoList
          todos={this.fitlerTodos(this.props.todos)}
          onEditTodo={this.handleEditTodo}
          onDeleteTodo={this.handleDeleteTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = {
  createTodo,
  editTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
