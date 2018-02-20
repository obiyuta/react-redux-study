import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import * as TodoActions from '../actions'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
