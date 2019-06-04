import { setText, setTodos } from './actions'
import { getTodo } from '.'
import * as api from '../api'

export const fetchTodos = () => async dispatch => {
  const todos = await api.all()
  dispatch(setTodos(todos))
}

export const addTodo = text => async dispatch => {
  await api.add({ text })
  dispatch(setText(''))
  dispatch(fetchTodos())
}

export const toggleDone = id => async (dispatch, getState) => {
  const todo = getTodo(getState(), id)
  await api.update(id, { done: !todo.done })
  dispatch(fetchTodos())
}

export const removeTodo = id => async dispatch => {
  await api.remove(id)
  dispatch(fetchTodos())
}
