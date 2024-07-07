import Background from "../WelcomePage/WPPieces/Background";
import "./Cooperation.css";
import React from "react";
import CooperatiionTitle from "./assets/CooperatiionTitle";
import CooperationForm from "./assets/CooperationForm";
import { selectCooperation } from "../../store/cooperation/cooperationSlice";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

const Cooperation = () => {
    const { isLoading } = useSelector(selectCooperation);
    return (
        <header className="cooperation_header">
            <Background />
            <div className="container">
                <div>
                    <CooperatiionTitle />
                    <div className="cooperation_formik">
                        {isLoading ? <Loader /> : <CooperationForm />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Cooperation;
