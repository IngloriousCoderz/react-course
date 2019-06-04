import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import List from './List'
import { fetchTodos } from '../todos/sagaActions'
import { isDirty, areAllDone } from '../todos'

const enhance = connect(
  state => ({
    dirty: isDirty(state),
    areAllDone: areAllDone(state),
  }),
  { fetchTodos },
)

class App extends PureComponent {
  componentDidMount() {
    const { dirty, fetchTodos } = this.props
    if (dirty) {
      fetchTodos()
    }
  }

  componentDidUpdate() {
    const { dirty, fetchTodos } = this.props
    if (dirty) {
      fetchTodos()
    }
  }

  render() {
    const { title, areAllDone } = this.props

    return (
      <>
        <h1>{title}</h1>
        <Form />
        <List />
        {areAllDone ? 'All done.' : 'WIP...'}
      </>
    )
  }
}

export default enhance(App)
