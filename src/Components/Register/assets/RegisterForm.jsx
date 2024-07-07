import React from "react";
import { RegisterSchema, initialValuesRegister } from "../../../schema/registerSchema";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { fetchPostRegisteredUser } from "../../../store/users/API";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to your new World</h1>
      <Formik
        initialValues={initialValuesRegister}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          dispatch(fetchPostRegisteredUser(values));
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>
                <p>First Name</p>
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? <strong>{errors.firstName}</strong> : null}
              </label>
              <label>
                <p>Last Name</p>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? <strong>{errors.lastName}</strong> : null}
              </label>
              <label>
                <p>Email</p>
                <Field name="email" />
                {errors.email && touched.email ? <strong>{errors.email}</strong> : null}
              </label>
              <label>
                <p>Phone</p>
                <Field name="phone" />
                {errors.phone && touched.phone ? <strong>{errors.phone}</strong> : null}
              </label>
            </div>
            <div className="formik_right">
              <label>
                <p>Age</p>
                <Field name="age" />
                {errors.age && touched.age ? <strong>{errors.age}</strong> : null}
              </label>
              <label>
                <p>Nickname</p>
                <Field name="nickname" />
                {errors.nickname && touched.nickname ? <strong>{errors.nickname}</strong> : null}
              </label>
              <label>
                <p>Password</p>
                <Field name="password" />
                {errors.password && touched.password ? <strong>{errors.password}</strong> : null}
              </label>
              <div className="radios">
                <span>
                  <label className="label_radio">
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </label>
                  <label className="label_radio">
                    <Field type="radio" name="gender" value="Fmale" />
                    Female
                  </label>
                </span>
                <span>
                  <Field type="date" name="birthdayDate" />
                </span>
              </div>
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
