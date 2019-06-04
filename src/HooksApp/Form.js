import React, { useContext, memo } from 'react'

import { setText } from '../todos/actions'
import { todoAdded } from '../todos/sagaActions'
import * as api from '../api'

import TextContext from './contexts/TextContext'
import DispatchContext from './contexts/DispatchContext'

function Form() {
  const text = useContext(TextContext)
  const dispatch = useContext(DispatchContext)

  const addTodo = async text => {
    const todo = await api.add({ text })
    dispatch(todoAdded(todo))
  }

  const handleChange = event => dispatch(setText(event.target.value))
  const handleSubmit = event => {
    event.preventDefault()
    addTodo(text)
  }

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

export default memo(Form)
