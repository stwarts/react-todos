import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../../actions/todoActions'

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

const mapStateToProps = ({ currentFilter }) => {
  return { currentFilter }
}

const mapDispatchToProps = {
  changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
