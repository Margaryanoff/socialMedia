import Background from "../WelcomePage/WPPieces/Background";
import "./About.css";
import React from "react";
import AboutCards from "./assets/AboutCards";
import AboutTitle from "./assets/AboutTitle";

const About = () => {
    return (
        <header className="about_header">
            <Background />
            <div className="container">
                <AboutTitle />
                <div className="features">
                    <AboutCards />
                </div>
            </div>
        </header>
    );
};

export default About;
