
import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export class Header extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    const { addTodo } = this.props

    if (text.length !== 0) {
      addTodo(text)
    }
  }

  render() {
    return (
      <div>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </div>
    )
  }
}

export default Header
