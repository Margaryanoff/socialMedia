import { useSelector } from "react-redux";
import Background from "../WelcomePage/WPPieces/Background";
import "./Contacts.css";
import ContactFeatures from "./assets/ContactFeatures";
import ContactForm from "./assets/ContactForm";
import ContactTitle from "./assets/ContactTitle";
import { contactSelector } from "../../store/contacts/contactsSlice";
import Loader from "../../Loader/Loader";

const Contacts = () => {
    const { isLoading } = useSelector(contactSelector);
    return (
        <header className="contacts_header">
            <Background />
            <div className="container">
                <div className="contacts_main_div">
                    <div className="contacts_title">
                        <ContactTitle />
                    </div>
                    <div className="contacts_formik">
                        <h2>Stay in touch</h2>
                        {isLoading ? <Loader /> : <ContactForm />}
                    </div>
                    <div className="contact_features_main">
                        <Background />
                        <ContactFeatures />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Contacts;
