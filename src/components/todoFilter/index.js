import React from 'react'

class TodoFilter extends React.Component {
  render() {
    const { currentFilter, changeFilter } = this.props

    return (
      <div>
        <label>
          <input
            type="radio"
            value='all'
            onChange={() => changeFilter('all')}
            checked={currentFilter === 'all'}
          /> All
        </label>

        <label>
          <input
            type="radio"
            value='done'
            onChange={() => changeFilter('done')}
            checked={currentFilter === 'done'}
          /> Done
        </label>

        <label>
          <input
            type="radio"
            value='incomplete'
            onChange={() => changeFilter('incomplete')}
            checked={currentFilter === 'incomplete'}
          /> Incomplete
        </label>
      </div>
    )
  }
}

export default TodoFilter