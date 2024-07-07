import React, { useState } from "react";
import "./EventModal.css";
import { Field, Form, Formik } from "formik";
import Remove from "../../SVG/Remove";
import {
    eventInitialValues,
    eventRegisterValidation,
} from "../../schema/eventValidation";
import Calendar from "../../SVG/Calendar";
import ArrowRight from "../../SVG/ArrowRight";
import Location from "../../SVG/Location";
import Upload from "../../SVG/Upload";

const EventModal = ({ setEventModal }) => {
    
    const [multipleImages, setMultipleImages] = useState([]);

    const handleMultipleFiles = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setMultipleImages(reader.result);
        };
    };
    return (
        <div className="event_modal_main">
            <div className="event_title">
                <h1>Set an event</h1>
                <span onClick={() => setEventModal(false)}>
                    <Remove />
                </span>
            </div>
            <div className="event_form">
                <Formik
                    initialValues={eventInitialValues}
                    validationSchema={eventRegisterValidation}
                    onSubmit={(values) => {
                        values.images = multipleImages;
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label>
                                <p>
                                    Event Date <Calendar />
                                </p>
                                <Field
                                    type="date"
                                    name="eventDate"
                                    className="eventDate"
                                />
                                {errors.eventDate && touched.eventDate ? (
                                    <strong>{errors.eventDate}</strong>
                                ) : null}
                            </label>
                            <div className="event_time">
                                <label>
                                    <p>Time From</p>
                                    <Field name="timeFrom" type="time" />
                                    {errors.timeFrom && touched.timeFrom ? (
                                        <strong>{errors.timeFrom}</strong>
                                    ) : null}
                                </label>
                                <ArrowRight />
                                <label className="event_time_to">
                                    <p>To</p>
                                    <Field name="timeTo" type="time" />
                                    {errors.timeTo && touched.timeTo ? (
                                        <strong>{errors.timeTo}</strong>
                                    ) : null}
                                </label>
                            </div>
                            <div className="place_images">
                                <label className="eventPlace">
                                    <p>
                                        Event Place <Location />
                                    </p>
                                    <Field name="eventPlace" type="text" />
                                    {errors.eventPlace && touched.eventPlace ? (
                                        <strong>{errors.eventPlace}</strong>
                                    ) : null}
                                </label>
                                <label className="upload_images">
                                    <p>
                                        <Upload /> Upload images
                                    </p>

                                    <Field
                                        type="file"
                                        name="images"
                                        id="images"
                                        multiple
                                        onChange={handleMultipleFiles}
                                    />
                                </label>
                            </div>
                            <label>
                                <Field
                                    as="textarea"
                                    name="eventBio"
                                    placeholder="Tell us about your event"
                                    rows="6"
                                />
                                {errors.eventBio && touched.eventBio ? (
                                    <strong>{errors.eventBio}</strong>
                                ) : null}
                            </label>
                            <div className="button_div">
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default EventModal;
