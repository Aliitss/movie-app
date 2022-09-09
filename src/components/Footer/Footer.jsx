import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

//styles
import './Footer.css'

function Footer() {
  return (
    <footer>
      <h4 className="footer__logo"> Aliitss Dev </h4>

      <ul className="permalinks">
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/favourites" >Favourites</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Aliitss" target="_blank" rel='noreferrer'>
          
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/alessandra-bolivar-598944242/" target="_blank" rel='noreferrer'>          
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aliitss Dev. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
