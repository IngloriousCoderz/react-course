import React from 'react'
import { connect } from 'react-redux'

import classes from './List.module.css'
import { toggleDone, removeTodo } from '../todos/sagaActions'
import { getTodos } from '../todos'

// const mapStateToProps = state => ({
//   todos: getTodos(state),
// })
// const mapDispatchToProps = dispatch => ({
//   toggleDone: id => dispatch(toggleDone(id)),
//   removeTodo: id => dispatch(removeTodo(id)),
// })

const enhance = connect(
  state => ({ todos: getTodos(state) }),
  { toggleDone, removeTodo },
)

function List({ todos, toggleDone, removeTodo }) {
  return (
    <ul>
      {todos.map(({ id, done, text }) => (
        <li key={id} className={done ? classes.done : undefined}>
          <span onClick={event => toggleDone(id)}>{text}</span>
          <button onClick={event => removeTodo(id)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default enhance(List)
