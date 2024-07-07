import * as Yup from "yup";

export const eventRegisterValidation = Yup.object().shape({
    eventDate: Yup.string().required("Required"),
    eventBio: Yup.string()
        .min(5, "Minimum 5 letters")
        .max(200, "Max 200 letters")
        .required("Required"),
    eventPlace: Yup.string()
        .min(5, "Minimum 5 letters")
        .max(13, "Maximum 13 letters")
        .required("Required"),
    timeFrom: Yup.string("Must be a number").required("Required"),
    timeTo: Yup.string("Must be a number").required("Reuqired"),
});

export const eventInitialValues = {
    eventDate: "",
    eventPlace: "",
    eventBio: "",
    timeFrom: "",
    timeTo: "",
};
