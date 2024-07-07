import React from "react";
import {
    cooperationValidationSchema,
    cooperationValues,
} from "../../../schema/cooperationSchema";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { fetchCooperationRequest } from "../../../store/cooperation/API";

const CooperationForm = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={cooperationValues}
            validationSchema={cooperationValidationSchema}
            onSubmit={(values) => {
                dispatch(fetchCooperationRequest(values));
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label>
                        <strong>Name</strong>
                        <Field name="name" />
                        {errors.name && touched.name ? <p>{errors.name}</p> : null}
                    </label>
                    <label>
                        <strong>Email</strong>
                        <Field name="email" />
                        {errors.email && touched.email ? <p>{errors.email}</p> : null}
                    </label>
                    <label>
                        <strong>Company</strong>
                        <Field name="company" />
                    </label>
                    <div className="field_role">
                        <label>
                            <Field
                                name="message"
                                as="textarea"
                                rows="9"
                                placeholder="Write your message here..."
                            />
                            {errors.message && touched.message ? (
                                <p>{errors.message}</p>
                            ) : null}
                        </label>
                        <label>
                            <Field as="select" name="role">
                                <option defaultValue>I want to cooperate as</option>
                                <option value="Developer" id="role">
                                    Developer
                                </option>
                                <option value="Influencer" id="role">
                                    Influencer
                                </option>
                                <option value="Investor" id="role">
                                    Investor
                                </option>
                                <option value="Designer" id="role">
                                    Designer
                                </option>
                            </Field>
                            {errors.name && touched.name ? <p>{errors.name}</p> : null}
                        </label>
                    </div>
                    <button type="submit">Save</button>
                </Form>
            )}
        </Formik>
    );
};

export default CooperationForm;
