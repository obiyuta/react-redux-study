
import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import TodoList from './TodoList'

const App = ({todos, actions}) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <TodoList
      actions={actions}
      todos={todos}
    />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

export default App
