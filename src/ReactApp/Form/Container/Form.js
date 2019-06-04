import React from 'react'

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

export default Form
