import React from "react";
import { ChatEngine } from "react-chat-engine";
import { useSelector } from "react-redux";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";

const Messages = () => {
    const { singleUser } = useSelector(selectSingleUser);
    return (
        <ChatEngine
            height="90vh"
            projectID="c4237a8e-40d7-4236-8a43-d0df6c81feec"
            userName="Tatev_Bagratyan"
            userSecret="123123"
        />
    );
};

export default Messages;
