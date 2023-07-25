import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="assets/code.png" alt="logo" />
          <span> Eman Gomaa</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <img src="assets/eman gomaa yassin.jpg" alt="about" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
