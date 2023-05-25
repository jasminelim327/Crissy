import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top ">
      <NavLink className="navbar-brand" to="/post">
        Homepage Timeline
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse row" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item active">
            <NavLink className="nav-link ml-3" to="/post">
              Home
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link ml-2" to="/profile">
              Profile
            </NavLink>
          </li>

        </ul>
        
        

      </div>
    </nav>
    </>
  );
};

export default NavBar;
