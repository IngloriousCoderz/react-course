// actionTypes

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const SET_VALUE = 'SET_VALUE'

// actionCreators

export const increment = amount => ({ type: INCREMENT, payload: amount })
export const decrement = amount => ({ type: DECREMENT, payload: amount })
export const setValue = value => ({ type: SET_VALUE, payload: value })

// reducer

// [increment(3), decrement(2), setValue(7)].reduce(counter, { count: 4})

export default function counter(state = { count: 0 }, action) {
  const { type, payload } = action

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload }

    case DECREMENT:
      return { ...state, count: state.count - payload }

    case SET_VALUE:
      return { ...state, count: payload }

    default:
      return state
  }
}
