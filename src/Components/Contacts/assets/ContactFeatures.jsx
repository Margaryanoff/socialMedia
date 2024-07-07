import React from "react";
import { contacts } from "../../../assets/contacts";

const ContactFeatures = () => {
    return (
        <>
            {contacts.map((contact) => {
                return (
                    <div className="contact_card_parent" key={contact.id}>
                        <div className={`contact_card_root contact_card${contact.id}`}>
                            <span className={`contact_span${contact.id}`}>
                                {contact.icon}
                            </span>
                            <h2>{contact.title}</h2>
                            <p>{contact.body}</p>
                            <div>
                                <a href="mailto:">{contact.email}</a>
                                <a href="tel:">{contact.phone}</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ContactFeatures;
