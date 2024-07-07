import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(3, "Min 3 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    password: Yup.string()
        .min(3, "Min 3 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
});
export const loginInitialValues = { nickname: "", password: "" };
