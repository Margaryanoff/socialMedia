import React from "react";
import Dots from "../../../SVG/Dots";
import adimage from "../../../images/login.jpg";
import adMaker from "../../../images/icon6.png";
import { NavLink } from "react-router-dom";
const UPMAds = () => {
    return (
        <div className="userPage_ad_main">
            <div className="ad_title">
                <h2>Sponsored Ads</h2>
                <Dots />
            </div>
            <div>
                <img src={adimage} alt=""  className="ad_main_image"/>
                <div className="ad_name_sponsor_image">
                    <img src={adMaker} alt="" />
                    <h2>BigChef Longue</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id,
                    excepturi labore soluta repellat ipsa.
                </p>
                <NavLink to={"/"}>Learn more</NavLink>
            </div>
        </div>
    );
};

export default UPMAds;
