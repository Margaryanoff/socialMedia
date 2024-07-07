import React, { useEffect, useState } from "react";
import "./FeedbackSlider.css";
import logo from "../../images/loogggggoooo.png";
import { selectFeedback } from "../../store/feedback/feedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetFeedback } from "../../store/feedback/API";


const FeedbackSlider = () => {
    const [counter, setCounter] = useState(0);
    const { feedback } = useSelector(selectFeedback);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetFeedback());
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (counter === feedback.length - 1) setCounter(0);
            setCounter((_) => _ + 1);
        }, 3000);
        return () => clearInterval(slideInterval);
    }, [counter]);
    return (
        <div className="feedbacksSliderMain">
            <h1>Feedbacks</h1>
            <div className="wrapper">
                <div>
                    <div>
                        <img src={logo} alt="/" />
                        <h2>{feedback[counter]?.username}</h2>
                    </div>
                    <p>{feedback[counter]?.feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSlider;
