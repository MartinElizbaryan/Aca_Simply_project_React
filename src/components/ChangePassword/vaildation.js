import * as yup from "yup"

export const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .matches(/^[a-zA-Z0-9]+$/, "Password should contains only numbers and letters")
    .required("Current password is required"),
  newPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .matches(/^[a-zA-Z0-9]+$/, "Password should contains only numbers and letters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .required("Retype your new password")
    .oneOf([yup.ref("newPassword")], "Both passwords need to be the same"),
})
