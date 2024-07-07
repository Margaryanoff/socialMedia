import "./Error.css";
import Background from "../WelcomePage/WPPieces/Background";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="error_main">
            <Background />
            <h1>Oops, looks like ur lost, try one of these</h1>
            <div>
                <NavLink to={"/"}>Log in</NavLink>
                <NavLink to={"register"}>Register</NavLink>
            </div>
        </div>
    );
};

export default Error;
