
import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({todos, actions}) => (
  <div>
    <ul>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          todo={todo}
          {...actions}
        />
      )}
    </ul>
  </div>
)

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

export default TodoList
