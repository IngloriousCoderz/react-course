import { takeLatest, call, put, select } from 'redux-saga/effects'

import * as types from './actionTypes'
import { setDirty } from './actions'
import { todosReceived, todoAdded } from './sagaActions'
import { getTodo } from '.'
import * as api from '../api'

export default function* rootSaga() {
  yield takeLatest(types.FETCH_TODOS_SAGA, fetchTodosSaga)
  yield takeLatest(types.ADD_TODO_SAGA, addTodoSaga)
  yield takeLatest(types.TOGGLE_DONE_SAGA, toggleDoneSaga)
  yield takeLatest(types.REMOVE_TODO_SAGA, removeTodoSaga)
}

export function* fetchTodosSaga(action) {
  const todos = yield call(api.all)
  yield put(todosReceived(todos))
}

function* addTodoSaga(action) {
  const { payload: text } = action
  const todo = yield call(api.add, { text })
  yield put(todoAdded(todo))
}

function* toggleDoneSaga(action) {
  const { payload: id } = action
  const todo = yield select(getTodo, id)
  yield call(api.update, id, { done: !todo.done })
  yield put(setDirty(true))
}

function* removeTodoSaga(action) {
  const { payload: id } = action
  yield call(api.remove, id)
  yield put(setDirty(true))
}
