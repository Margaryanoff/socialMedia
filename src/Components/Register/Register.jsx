import React from "react";
import "./Register.css";
import Background from "../WelcomePage/WPPieces/Background";
import RegisterForm from "./assets/RegisterForm";
import RegisterLogo from "./assets/RegisterLogo";
const Register = () => {
  return (
    <header className="register_header">
      <Background />
      <div className="container">
        <div className="register_main_div">
          <RegisterLogo />
          <div className="formik">
            <RegisterForm />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Register;
