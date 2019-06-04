import React, { useReducer, useEffect } from 'react'

import { todosReceived } from '../todos/sagaActions'
import rootReducer, { isDirty, getText, getTodos, areAllDone } from '../todos'
import * as api from '../api'

import AreAllDoneContext from './contexts/AreAllDoneContext'
import TextContext from './contexts/TextContext'
import TodosContext from './contexts/TodosContext'
import DispatchContext from './contexts/DispatchContext'

const initialState = {
  dirty: true,
  text: '',
  todos: [],
}

function StateContainer({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const dirty = isDirty(state)

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await api.all()
      dispatch(todosReceived(todos))
    }

    if (dirty) {
      fetchTodos()
    }
  }, [dirty])

  return (
    <AreAllDoneContext.Provider value={areAllDone(state)}>
      <TextContext.Provider value={getText(state)}>
        <TodosContext.Provider value={getTodos(state)}>
          <DispatchContext.Provider value={dispatch}>
            {children}
          </DispatchContext.Provider>
        </TodosContext.Provider>
      </TextContext.Provider>
    </AreAllDoneContext.Provider>
  )
}

export default StateContainer
