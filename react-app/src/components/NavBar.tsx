import { ImageListItem } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import crissLogo from "../assets/criss.svg";

function NavBar(){

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-lg-2">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleSidebarToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div 
          className={`collapse navbar-collapse ${
            isSidebarOpen ? "show" : ""
          } row`}
          id="navbarColor03"
          
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink  
                className="nav-link pl-2"
                to="/post"
                onClick={handleSidebarToggle
                }
                style={{ paddingLeft: '16px'}}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" >
              <NavLink 
                className="nav-link pl-10"
                to="/profile"
                onClick={handleSidebarToggle}
                style={{ paddingLeft: '16px'}}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className="navbar-brand" to="/post">
          <img src ={crissLogo}
            alt="Logo"
            style={{ width: "30px", height: "30px", padding: 3 }}
          />
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
