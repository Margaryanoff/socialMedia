import React from "react";
import { contactsTitle } from "../../../assets/contacts";

const ContactTitle = () => {
    return (
        <>
            <img src={contactsTitle.logo} alt="/" />
            <h1>{contactsTitle.title}</h1>
            <p>{contactsTitle.body}</p>
        </>
    );
};

export default ContactTitle;
