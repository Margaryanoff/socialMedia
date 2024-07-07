import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import {
    passwordChangeInitialValues,
    paswordChangeValidation,
} from "../../../../schema/changePassword";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser } from "../../../../store/singleUser/singleUserSlice";
import { fetchPatchUserNewPassword } from "../../../../store/singleUser/API";
import { useNavigate } from "react-router-dom";
import { fetchPatchUserNewPasswordGlobalServer } from "../../../../store/users/API";

const SettingsChangePassword = () => {
    const { singleUser } = useSelector(selectSingleUser);
    const [inputChange, setInputChange] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <section className="change_password_main">
            <h2>Change Password</h2>
            <div>
                <div>
                    <input
                        autoComplete="old-password"
                        type="password"
                        placeholder="Old Password"
                        onChange={(e) =>
                            e.target.value === singleUser[0]?.password
                                ? setInputChange(true)
                                : setInputChange(false)
                        }
                    />
                </div>
                <div
                    className="formik_vlaidate"
                    style={{
                        opacity: inputChange ? 1 : 0.3,
                        readOnly: inputChange ? "all" : "none",
                    }}
                >
                    <Formik
                        initialValues={passwordChangeInitialValues}
                        validationSchema={paswordChangeValidation}
                        onSubmit={(values) => {
                            dispatch(
                                fetchPatchUserNewPassword({
                                    data: {
                                        password: values.newPassword,
                                    },
                                    id: singleUser[0]?.id,
                                })
                            );
                            dispatch(
                                fetchPatchUserNewPasswordGlobalServer({
                                    data: {
                                        password: values.newPassword,
                                    },
                                    id: singleUser[0]?.id,
                                })
                            );
                            navigate("/");
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <label>
                                    <Field
                                        autoComplete="new-password"
                                        placeholder="New Password"
                                        name="newPassword"
                                        type="password"
                                    />
                                    {errors.newPassword && touched.newPassword ? (
                                        <p>{errors.newPassword} </p>
                                    ) : null}
                                </label>
                                <label>
                                    <Field
                                        autoComplete="new-password"
                                        placeholder="Repeat new Password"
                                        name="newPasswordConfirm"
                                        type="password"
                                    />
                                    {errors.newPasswordConfirm &&
                                    touched.newPasswordConfirm ? (
                                        <p>{errors.newPasswordConfirm} </p>
                                    ) : null}
                                </label>
                                <button type="submit">Save changes</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default SettingsChangePassword;
