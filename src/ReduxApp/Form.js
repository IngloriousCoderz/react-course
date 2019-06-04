import React, { memo } from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import { setText } from '../todos/actions'
import { addTodo } from '../todos/sagaActions'
import { getText } from '../todos'

const enhance = compose(
  connect(
    state => ({ text: getText(state) }),
    { setText, addTodo },
  ),

  withHandlers({
    handleChange: ({ setText }) => event => setText(event.target.value),
    handleSubmit: ({ text, addTodo }) => event => {
      event.preventDefault()
      addTodo(text)
    },
  }),

  memo,
)

function Form({ text, handleChange, handleSubmit }) {
  return (
    <form>
      <input
        placeholder="What next?"
        autoFocus={true}
        value={text}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default enhance(Form)
