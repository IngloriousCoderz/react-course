import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  fontSize: 'small',
  textAlign: 'center',
}

function Footer() {
  return (
    <div>
      <Link to="/confirm">Clear</Link>
      <footer style={style}>&copy; 2019 Inglorious Coderz</footer>
    </div>
  )
}

export default Footer
