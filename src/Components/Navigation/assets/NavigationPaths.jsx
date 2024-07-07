import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/loogggggoooo.png";

const NavigationPaths = () => {
  return (
    <>
      <div className="nav_logo_div">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navigation_options">
        <NavLink to={"register"}>Register</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"contacts"}>Contacts</NavLink>
        <NavLink to={"cooperation"}>Cooperation</NavLink>
      </div>
    </>
  );
};

export default NavigationPaths;
