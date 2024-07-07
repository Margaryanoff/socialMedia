import * as Yup from "yup";
export const cooperationValues = {
    role: "",
    company: "",
    name: "",
    email: "",
    message: "",
};

export const cooperationValidationSchema = Yup.object().shape({
    role: Yup.string().required("Required"),
    name: Yup.string()
        .min(4, "Min 4 Letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    email: Yup.string().email().required("Required"),
    message: Yup.string().required("Required"),
});
