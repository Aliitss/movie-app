import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Buscador from '../Buscador/Buscador'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark"> 
            <div className="container-fluid">
                <Link className="navbar-brand text-bg-dark p-3" to="#">Movie App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active text-bg-dark" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-bg-dark" to="/list">List</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link text-bg-dark" to="/contact">
                            Contact
                        </Link>
                        </li>
                    </ul>
                    <Buscador />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header