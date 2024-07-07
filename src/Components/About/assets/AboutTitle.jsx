import React from "react";
import { aboutTitle } from "../../../assets/about";

const AboutTitle = () => {
    return (
        <div className="vision">
            <img src={aboutTitle.image} alt="" />
            <p>{aboutTitle.body}</p>
        </div>
    );
};

export default AboutTitle;
