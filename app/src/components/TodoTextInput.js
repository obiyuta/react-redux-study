import React from 'react'
import PropTypes from 'prop-types'

export default class TodoTextInput extends React.Component {
  static propTypes = {
    newTodo: PropTypes.bool,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const { onSave, newTodo } = this.props
    const text = e.target.value.trim()

    if (e.which === 13) {
      onSave(text)
      if (newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    const { placeholder } = this.props
    const { text } = this.state

    return (
      <input
        autoFocus="true"
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        placeholder={placeholder}
        type="text"
        value={text}
      />
    )
  }
}
