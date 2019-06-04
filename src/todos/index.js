import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import dirty from './dirty'
import text from './text'
import todos, * as fromTodos from './todos'
import { isDone } from './todo'

// selectors

export const isDirty = state => !!state.dirty
export const getText = state => state.text
export const getTodos = state => state.todos
export const areAllDone = createSelector(
  getTodos,
  todos => todos.every(isDone),
)
export const getTodo = (state, id) => fromTodos.getTodo(getTodos(state), id)

// const combineReducers = reducers => (state, action) =>
//   Object.keys(reducers).reduce((acc, key) => {
//     acc[key] = reducers[key](state[key], action)
//     return acc
//   }, {})

const combinedReducer = combineReducers({ dirty, text, todos })

export default combinedReducer

// export default function rootReducer(state = {}, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         text: text(state.text, setText('')),
//         todos: todos(state.todos, addTodo(state.text)),
//       }

//     default:
//       return combinedReducer(state, action)
//   }
// }
