import { SET_TEXT, ADD_TODO, TODO_ADDED } from './actionTypes'

export default function text(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case SET_TEXT:
      return payload

    case ADD_TODO:
    case TODO_ADDED:
      return ''

    default:
      return state
  }
}
