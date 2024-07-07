import React from "react";
import { Field, Form, Formik } from "formik";
import { contactSchema, initialValuesContact } from "../../../schema/contactSchema";
import { useDispatch } from "react-redux";
import { fetchPostContactFeedback } from "../../../store/contacts/API";

const ContactForm = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={initialValuesContact}
            validationSchema={contactSchema}
            onSubmit={(values) => {
                dispatch(fetchPostContactFeedback(values));
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label>
                        <p>Name</p>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <strong>{errors.name}</strong>
                        ) : null}
                    </label>
                    <label>
                        <p>Email</p>
                        <Field name="email" />
                        {errors.email && touched.email ? (
                            <strong>{errors.email}</strong>
                        ) : null}
                    </label>
                    <label>
                        <Field
                            as="textarea"
                            name="message"
                            placeholder="Send us a message..."
                        />
                    </label>
                    <button type="submit">Send</button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
