import React, { memo } from 'react'

// CSS modules
import classes from './List.module.css'

// CSS-in-JS
const styles = {
  dimmed: {
    color: 'gray',
  },
}

function List({ todos, toggleDone, removeTodo }) {
  return (
    <ul>
      {todos.map(({ id, done, text }) => (
        <li
          key={id}
          className={done ? classes.done : undefined}
          style={id === 'new' ? styles.dimmed : undefined}>
          <span onClick={event => toggleDone(id)}>{text}</span>
          <button onClick={event => removeTodo(id)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default memo(List)
