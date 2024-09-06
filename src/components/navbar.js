import React from "react";
import image18 from "../images/zaffranNewLogo.png";
import "./nav.css";
import logo3 from "../images/logo3.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
      <div className="container-fluid">
        <img className="logo" to="/home" src={image18} alt="image here" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="home "
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="menu">
                Menu
              </Link>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="hwk">
                    How it works
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="spmenu">
                    Special Menu
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="menu">
                    {" "}
                    Menu
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="hwk">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item-btn1 p-2">
              <NavLink to="form ">LOG IN</NavLink>
            </li>
            <li className="nav-item-btn p-2">
              <NavLink to="form">SIGN UP</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
