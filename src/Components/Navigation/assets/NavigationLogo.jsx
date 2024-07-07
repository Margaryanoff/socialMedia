import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../images/loogggggoooo.png'

const NavigationLogo = () => {
    return (
        <div className="nav_logo_div">
            <NavLink to={"/"}>
                <img src={logo} alt="" />
            </NavLink>
        </div>
    );
};

export default NavigationLogo;
