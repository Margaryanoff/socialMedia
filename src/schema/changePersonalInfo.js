import * as Yup from "yup";

export const validationSchemaPersonalInfo = Yup.object().shape({
    bio: Yup.string().min(5, "Minimum 5 letters").max(30, "Max 30 letters"),
    city: Yup.string().min(4, "Minimum 4 letters").max(20, "Maximum 20 letters"),
    position: Yup.string().min(4, "Minimum 4 letters").max(20, "Maximum 20 letters"),
    company: Yup.string().min(4, "Minimum 4 letters").max(20, "Maximum 20 letters"),
    education: Yup.string().min(4, "Minimum 4 letters").max(20, "Maximum 20 letters"),
});

export const initialValuesPersonalInfo = {
    bio: "",
    city: "",
    position: "",
    company: "",
    education: "",
};
