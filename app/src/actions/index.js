import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'

export const addTodo = createAction(types.ADD_TODO)
export const deleteTodo = createAction(types.DELETE_TODO)
export const editTodo = createAction(types.EDIT_TODO)
export const completeTodo = createAction(types.COMPLETE_TODO)
export const moveUpTodo = createAction(types.MOVE_UP_TODO)
export const moveDownTodo = createAction(types.MOVE_DOWN_TODO)
export const editTodoAssignee = createAction(types.EDIT_TODO_ASSIGNEE)
