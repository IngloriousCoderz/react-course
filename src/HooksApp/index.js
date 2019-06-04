import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <p>...</p>

const App = Loadable({
  loader: () => import('./App'),
  loading: Loading,
})
const Confirm = Loadable({
  loader: () => import('./Confirm'),
  loading: Loading,
})

ReactDOM.render(
  <Router>
    <Route path="/" exact render={() => <App title="Todo List" />} />
    <Route path="/confirm" component={Confirm} />
  </Router>,

  document.getElementById('root'),
)
