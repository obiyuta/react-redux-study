import ASSIGNABLE_MEMBERS from '../constants/AssignableMembers'
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  MOVE_UP_TODO,
  MOVE_DOWN_TODO,
  EDIT_TODO_ASSIGNEE
} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
    assignee: ASSIGNABLE_MEMBERS[0]
  }
]

const swap = (array, x, y) => {
  const t = array[x]
  array[x] = array[y]
  array[y] = t
  return array
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload,
          assignee: {}
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.payload.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )

    case MOVE_UP_TODO: {
      const index = state.indexOf(action.payload)
      return index > 0
        ? [ ...swap(state, index, index - 1) ]
        : state
    }

    case MOVE_DOWN_TODO: {
      const index = state.indexOf(action.payload)
      return index + 1 < state.length
        ? [ ...swap(state, index, index + 1) ]
        : state
    }

    case EDIT_TODO_ASSIGNEE:
      return state.map(todo =>
        todo.id === action.payload.id
          ? action.payload
          : todo
      )

    default:
      return state
  }
}
