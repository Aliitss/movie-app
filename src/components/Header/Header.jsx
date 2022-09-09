import React from "react";
import { Link } from "react-router-dom";

//Components
import Buscador from "../Buscador/Buscador";

//Styles
import "./Header.css";

function Header(props) {
  return (
    <header>
      <nav>
        <div>
        <Link to="/list" className="header__logo">
          Movie App
        </Link>

        <ul className="permalinks_header">
          <li>
            <Link to="/" aria-current="page">Login</Link>
          </li>
          <li>
            <Link to="/list">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <span className="text-success">{props.favourites.length > 0 && props.favourites.length}</span>
          </li>
        </ul>
        <Buscador />

        {/* 
        <div className="movie_app">
          <Link to="#">
            Movie App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-bg-dark"
                  aria-current="page"
                  to="/"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-bg-dark" to="/list">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-bg-dark" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-bg-dark" to="/favourites">
                  Favourites
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <span className="text-success">{props.favourites.length > 0 && props.favourites.length}</span>
              </li>
            </ul>
            <Buscador />
          </div>
        </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
