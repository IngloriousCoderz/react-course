import {
  ADD_TODO,
  TOGGLE_DONE,
  REMOVE_TODO,
  SET_TODOS,
  TODOS_RECEIVED,
  // TODO_ADDED,
} from './actionTypes'
import todo from './todo'

export const getTodo = (state, id) => state.find(todo => todo.id === id)

export default function todos(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case ADD_TODO: {
      const id = state.length ? state[state.length - 1].id : 0
      return [...state, { id: id + 1, text: payload }]
    }

    case TOGGLE_DONE:
      return state.map(t => todo(t, action))

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload)

    case SET_TODOS:
    case TODOS_RECEIVED:
      return payload

    // case TODO_ADDED:
    //   return [...state, payload]

    default:
      return state
  }
}
