import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#333",
    padding: "1rem",
  };

  const linkStyle = ({ isActive }) => {
    return {
      color: isActive ? "Yellow" : "white",
      textDecoration: "none",
      fontSize: isActive ? "24px" : "20px",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>
      <NavLink to="/Product" style={linkStyle}>
        Products
      </NavLink>
      <NavLink to="/users" style={linkStyle}>
        Users
      </NavLink>
      <NavLink to="/search" style={linkStyle}>
        Search
      </NavLink>
    </nav>
  );
}

export default Navbar;
