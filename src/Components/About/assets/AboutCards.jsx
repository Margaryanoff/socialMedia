import React from "react";
import { about } from "../../../assets/about";

const AboutCards = () => {
    return (
        <>
            <h1>Features and Functionalities</h1>
            <div className="features_cards">
                {about.map((feature) => {
                    return (
                        <div key={feature.id}>
                            <span className="svg_span">{feature.icon}</span>
                            <span>
                                <h2>{feature.title}</h2>
                                <p>{feature.body}</p>
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AboutCards;
