import React from 'react'

import { useForm } from './useForm'

function Form({ addTodo }) {
  const { text, handleChange, handleSubmit } = useForm(addTodo)

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

export default Form
