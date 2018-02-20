
import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import TodoAssigneeSelect from './TodoAssigneeSelect'
import ASSIGNABLE_MEMBERS from '../constants/AssignableMembers'

export class TodoItem extends React.Component {
  static propTypes = {
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    editTodoAssignee: PropTypes.func.isRequired,
    moveDownTodo: PropTypes.func.isRequired,
    moveUpTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSaveText = (text) => {
    const { todo, deleteTodo, editTodo } = this.props

    if (text.length === 0) {
      deleteTodo(todo)
    } else {
      editTodo({...todo, text: text})
    }
    this.setState({ editing: false })
  }

  handleSaveAssignee = (id) => {
    const { todo, editTodoAssignee } = this.props

    editTodoAssignee({...todo, assignee: ASSIGNABLE_MEMBERS[id - 1] || {}})
    this.setState({ editing: false })
  }

  handleClickMoveUp = () => {
    const { todo, moveUpTodo } = this.props
    moveUpTodo(todo)
  }

  handleClickMoveDown = () => {
    const { todo, moveDownTodo } = this.props
    moveDownTodo(todo)
  }

  handleClickDelete = () => {
    const { todo, deleteTodo } = this.props

    deleteTodo(todo)
  }

  handleChangeText = () => {
    const { todo, completeTodo } = this.props
    completeTodo(todo)
  }

  render() {
    const { todo } = this.props
    const { editing } = this.state
    const assignee = todo.assignee.name || 'no assignee'

    let element
    if (editing) {
      element = (
        <div>
          <TodoTextInput
            onSave={this.handleSaveText}
            text={todo.text}
          />
          <TodoAssigneeSelect
            assignables={ASSIGNABLE_MEMBERS}
            id={todo.assignee.id || null}
            onSave={this.handleSaveAssignee}
          />
        </div>
      )
    } else {
      element = (
        <div>
          <input checked={todo.completed}
            onChange={this.handleChangeText}
            type="checkbox"
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text} - {assignee}
          </label>
          <button onClick={this.handleClickMoveUp}>上に</button>
          <button onClick={this.handleClickMoveDown}>下に</button>
          <button onClick={this.handleClickDelete}>削除</button>
        </div>
      )
    }

    return (
      <li>{element}</li>
    )
  }
}

export default TodoItem
