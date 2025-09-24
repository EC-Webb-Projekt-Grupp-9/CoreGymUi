import React from "react";
import { Links, NavLink } from "react-router-dom";
import "./hamburger.css";

export default function Hamburger() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to={"/"} className="nav-links">
                Startsida
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/booking"} className="nav-links">
                Boka Pass
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
