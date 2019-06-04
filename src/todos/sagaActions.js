import * as types from './actionTypes'

export const fetchTodos = () => ({ type: types.FETCH_TODOS_SAGA })
export const todosReceived = todos => ({
  type: types.TODOS_RECEIVED,
  payload: todos,
})

export const addTodo = text => ({
  type: types.ADD_TODO_SAGA,
  payload: text,
})
export const todoAdded = todo => ({ type: types.TODO_ADDED, payload: todo })

export const toggleDone = id => ({
  type: types.TOGGLE_DONE_SAGA,
  payload: id,
})

export const removeTodo = id => ({
  type: types.REMOVE_TODO_SAGA,
  payload: id,
})
