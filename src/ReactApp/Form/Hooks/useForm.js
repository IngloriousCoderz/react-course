import { useState } from 'react'

export function useForm(addTodo) {
  const [text, setText] = useState('')
  const handleChange = event => setText(event.target.value)
  const handleSubmit = event => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return { text, handleChange, handleSubmit }
}
