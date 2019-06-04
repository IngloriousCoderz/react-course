import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import * as api from '../api'

function Confirm() {
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleYes = async () => {
    await api.clear()
    setRedirectToHome(true)
  }
  const handleNo = () => {
    setRedirectToHome(true)
  }

  if (redirectToHome) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h2>WARNING</h2>
      <p>This operation will wipe all of your data! Do you wish to continue?</p>
      <button onClick={handleYes}>Hell yeah!</button>
      <button onClick={handleNo}>No way!</button>
    </>
  )
}

export default Confirm
