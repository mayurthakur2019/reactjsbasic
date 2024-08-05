import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Products() {
  const navStyle = {
    display: "flex",

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
    <>
      <div>Products</div>
      <nav style={navStyle}>
        <NavLink to="shirts" style={linkStyle}>
          shirts
        </NavLink>
        &nbsp;&nbsp;
        <NavLink to="jeans" style={linkStyle}>
          Jeans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
