import * as types from './actionTypes'

export const setDirty = dirty => ({ type: types.SET_DIRTY, payload: dirty })
export const setText = text => ({ type: types.SET_TEXT, payload: text })
export const setTodos = todos => ({ type: types.SET_TODOS, payload: todos })
export const addTodo = text => ({ type: types.ADD_TODO, payload: text })
export const toggleDone = id => ({ type: types.TOGGLE_DONE, payload: id })
export const removeTodo = id => ({ type: types.REMOVE_TODO, payload: id })
