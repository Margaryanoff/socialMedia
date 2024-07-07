import React from "react";
import "./WelcomePage.css";
import WPContacts from "./WPPieces/WPContacts";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WPWelcomeBack from "./WPPieces/WPWelcomeBack";
import Background from "./WPPieces/Background";
import WPFormik from "./WPPieces/WPFormik";
import FeedbackSlider from "../FeedbackSlider/FeedbackSlider";

function WelcomePage() {
  return (
    <div className="all_welcome">
      <Background />
      <div className="welcome_main">
        <div className="welcome_info">
          <WPWelcomeBack />
          <WPContacts />
        </div>
        <div className="slides">
          <FeedbackSlider />
        </div>
        <div className="welcome_sign">
          <WPFormik />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
