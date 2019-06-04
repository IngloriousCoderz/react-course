import { SET_DIRTY, TODOS_RECEIVED, TODO_ADDED } from './actionTypes'

export default function dirty(state = false, action) {
  const { type, payload } = action

  switch (type) {
    case SET_DIRTY:
      return payload

    case TODOS_RECEIVED:
      return false

    case TODO_ADDED:
      return true

    default:
      return state
  }
}
