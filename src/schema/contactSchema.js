import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Min 4 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    email: Yup.string().email("Not valid email").required("Required"),
    message: Yup.string().min(4, "Minimum 4 letters").required("Required"),
});

export const initialValuesContact = { id: Date.now(), name: "", email: "", message: "" };
