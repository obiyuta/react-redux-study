import React from 'react'
import PropTypes from 'prop-types'

export default class TodoAssigneeSelect extends React.Component {
  static propTypes = {
    assignables: PropTypes.array.isRequired,
    id: PropTypes.number,
    onSave: PropTypes.func.isRequired
  }

  state = {
    id: this.props.id || null
  }

  handleChange = e => {
    const { onSave } = this.props
    const id = e.target.value.trim()

    onSave(id)
  }

  render() {
    const { assignables } = this.props
    const { id } = this.state

    return (
      <select
        defaultValue={id}
        onChange={this.handleChange}
      >
        <option>select one</option>
        {assignables.map(assignable =>
          <option
            key={assignable.id}
            value={assignable.id}
          >
            {assignable.name}
          </option>
        )}
      </select>
    )
  }
}
