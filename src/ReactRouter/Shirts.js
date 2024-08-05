import React from "react";
import { Outlet, NavLink } from "react-router-dom";
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
function Shirts() {
  return<><div>All Shirts Avilable</div>
     <nav style={navStyle}>
        <NavLink to="tshirts" style={linkStyle}>
          Tshirts
        </NavLink>
        &nbsp;&nbsp;
       
      </nav>
      <Outlet /></> ;
}

export default Shirts;
