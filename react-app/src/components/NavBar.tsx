import { ImageListItem } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import crissLogo from "../assets/criss.svg";

interface NavBarProps {
  handleSearch: (query: string) => void;
}


function NavBar({ handleSearch }: NavBarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  sticky-top p-lg-2"
        style={{ backgroundColor: "#e6f3ff" }}
      >
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
                onClick={handleSidebarToggle}
                style={{ paddingLeft: "16px" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link pl-10"
                to="/profile"
                onClick={handleSidebarToggle}
                style={{ paddingLeft: "16px" }}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <div className="ml-auto mr-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search.."
                  value={searchQuery}
                  onChange={handleInputChange} // Corrected onChange event handler
                  style={{ width: "300px", padding: "5px", marginLeft: "950px" }}
                />
              </div>
            </li>
          </ul>
        </div>

        <NavLink className="navbar-brand" to="/post">
          <img
            src={crissLogo}
            alt="Logo"
            style={{ width: "30px", height: "30px", padding: 3 }}
          />
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;