import { Field, Form, Formik } from "formik";
import { loginInitialValues, loginSchema } from "../../../schema/loginSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../../store/users/usersSlice";
import {  useState } from "react";
import { fetchPostSingleUser } from "../../../store/singleUser/API";

const WPFormik = () => {
  const [message, setMessage] = useState(false);
  const dispatch = useDispatch();
  const { dataUsers } = useSelector(selectUsers);
  const navigate = useNavigate();

  return (
    <>
      <h2>
        SIGN<span>in</span>
      </h2>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const validUser = dataUsers.find((elm) => elm.personalInfoChangable.nickname == values.nickname && elm.password == values.password);
          if (validUser) {
            dispatch(fetchPostSingleUser(validUser));
            navigate("/");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label className="main_labels">
              <p>Nickname</p>
              <Field name="nickname" />
              {errors.nickname && touched.nickname ? <strong>{errors.nickname}</strong> : null}
            </label>
            <label className="main_labels">
              <p>Password</p>
              <Field name="password" type="password" />
              {errors.password && touched.password ? <strong>{errors.password}</strong> : null}
            </label>
            <span className="submitButton_remember">
              <label className="checkbox_remember">
                <p>Remember Me</p>
                <input type="checkbox" />
              </label>
              <button type="submit">Sign In</button>
            </span>
          </Form>
        )}
      </Formik>
      <p className="register_portal">
        Don't have an Account? <NavLink to={"register"}>Register</NavLink>
      </p>
    </>
  );
};
export default WPFormik;
