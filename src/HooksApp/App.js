import React, { useContext } from 'react'

import StateContainer from './StateContainer'
import Form from './Form'
import List from './List'
import Footer from './Footer'
import AreAllDoneContext from './contexts/AreAllDoneContext'

function StatefulApp(props) {
  return (
    <StateContainer>
      <App {...props} />
    </StateContainer>
  )
}

function App({ title }) {
  const areAllDone = useContext(AreAllDoneContext)

  return (
    <>
      <h1>{title}</h1>
      <Form />
      <List />
      {areAllDone ? 'All done.' : 'WIP...'}
      <Footer />
    </>
  )
}

export default StatefulApp
