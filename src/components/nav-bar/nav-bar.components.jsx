import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './nav-bar.styles.css'

const NavBar = () => {
    const name = '<My Portfolio/>'
    return(
        <nav className="navbar navbar-expand-lg navbar-dark p-4">
        <div className="container">
        <a className="navbar-brand portfolio-name" to="/"> {name} </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My work</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>

        </ul>

      </div>
      </div>
    </nav>
)
}

export default NavBar;