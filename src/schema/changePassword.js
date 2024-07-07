import * as Yup from "yup";

export const paswordChangeValidation = Yup.object().shape({
    newPassword: Yup.string()
        .min(4, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter"),
    newPasswordConfirm: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        'Must match "New Password" field value'
    ),
});

export const passwordChangeInitialValues = {
    newPassword: "",
    newPasswordConfirm: "",
};
