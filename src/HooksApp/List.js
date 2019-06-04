import React, { useContext, memo } from 'react'

import classes from './List.module.css'

import TodosContext from './contexts/TodosContext'
import DispatchContext from './contexts/DispatchContext'
import { setDirty } from '../todos/actions'

import * as api from '../api'
import { getTodo } from '../todos/todos'

function List() {
  const todos = useContext(TodosContext)
  const dispatch = useContext(DispatchContext)

  const toggleDone = async id => {
    const todo = getTodo(todos, id)
    await api.update(id, { done: !todo.done })
    dispatch(setDirty(true))
  }

  const removeTodo = async id => {
    await api.remove(id)
    dispatch(setDirty(true))
  }

  const handleToggle = id => event => toggleDone(id)
  const handleRemove = id => event => removeTodo(id)

  return (
    <ul>
      {todos.map(({ id, done, text }) => (
        <li key={id} className={done ? classes.done : undefined}>
          <span onClick={handleToggle(id)}>{text}</span>
          <button onClick={handleRemove(id)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default memo(List)
