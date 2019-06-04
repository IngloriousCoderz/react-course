import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { setDirty } from '../todos/actions'
import rootReducer from '../todos'
import rootSaga from '../todos/sagas'

import App from './App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

sagaMiddleware.run(rootSaga)

store.dispatch(setDirty(true))

ReactDOM.render(
  <Provider store={store}>
    <App title="Todo List" />
  </Provider>,
  document.getElementById('root'),
)
