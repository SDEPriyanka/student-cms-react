import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <nav className="navbar  navbar-expand-lg  bg-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse text-white  navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  text-white mr-auto">
              <li className="nav-item active">
                <NavLink to="/" activeclassname="active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink to="about" className="nav-link">
                  About us
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink to="Cources" className="nav-link">
                  Cources
                </NavLink>
              </li>
              <li className="nav-item text-white">
                <NavLink to="Contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
