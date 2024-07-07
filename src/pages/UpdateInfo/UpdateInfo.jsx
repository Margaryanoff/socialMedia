import React from "react";
import "./UpdateInfo.css";
import { Field, Form, Formik } from "formik";
import { initialValuesPersonalInfo, validationSchemaPersonalInfo } from "../../schema/changePersonalInfo";
import Remove from "../../SVG/Remove";
import { useDispatch, useSelector } from "react-redux";
import { fetchChangeSinglUserPersonalInfo } from "../../store/singleUser/API";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";

const UpdateInfo = ({ updateModal, setUpdateModal }) => {
  const { singleUser } = useSelector(selectSingleUser);
  const dispatch = useDispatch();
  return (
    <div className="updateInfo">
      <div className={updateModal ? "change_info_title" : "change_info_title remove_modal"}>
        <h1>Change Info</h1>
        <span onClick={() => setUpdateModal(false)}>
          <Remove />
        </span>
      </div>
      <Formik
        initialValues={initialValuesPersonalInfo}
        validationSchema={validationSchemaPersonalInfo}
        onSubmit={(values) => {
          dispatch(
            fetchChangeSinglUserPersonalInfo({
              data: {
                personalInfo: {
                  ...values,
                },
              },
              id: singleUser[0].id,
            })
          );
          setUpdateModal(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>
              <p>Bio</p>
              <Field name="bio" />
              {errors.bio && touched.bio ? <strong>{errors.bio}</strong> : null}
            </label>
            <label>
              <p>City</p>
              <Field name="city" />
              {errors.city && touched.city ? <strong>{errors.city}</strong> : null}
            </label>
            <label>
              <p>Education</p>
              <Field name="education" />
              {errors.education && touched.education ? <strong>{errors.education}</strong> : null}
            </label>
            <label>
              <p>Company</p>
              <Field name="company" />
              {errors.company && touched.company ? <strong>{errors.company}</strong> : null}
            </label>
            <label>
              <p>Position</p>
              <Field name="position" />
              {errors.position && touched.position ? <strong>{errors.position}</strong> : null}
            </label>
            <button type="submit">Save Changes</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateInfo;
