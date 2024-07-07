import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="intersecting-circles-spinner">
            <div className="spinnerBlock">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
        </div>
    );
};

export default Loader;
