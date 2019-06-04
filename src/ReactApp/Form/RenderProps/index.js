import React from 'react'

import FormContainer from './FormContainer'

function Form({ addTodo }) {
  return (
    <FormContainer addTodo={addTodo}>
      {({ text, handleChange, handleSubmit }) => (
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
      )}
    </FormContainer>
  )
}

export default Form
