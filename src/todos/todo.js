import { TOGGLE_DONE } from './actionTypes'

export const isDone = state => !!state.done

export default function todo(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_DONE:
      return state.id === payload ? { ...state, done: !state.done } : state

    default:
      return state
  }
}
