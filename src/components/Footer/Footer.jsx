import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return ( 
    <footer className='bg-dark text-bg-dark p-3 position-relative-bottom'>
      <h5 className="nav justify-content-center "> Copyright Aliitss Dev</h5>
      <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/list">List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
      </ul>
    </footer>
  )
}

export default Footer