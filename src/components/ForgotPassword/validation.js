import * as yup from "yup"

export const validationSchema = yup.object({
  email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
})

export const validationSchemaCode = yup.object({
  code: yup
    .string("Enter your code")
    .matches(/^[0-9]+$/, "Password should contains only numbers and letters")
    .length(6, "The code length is 6 digit")
    .required("Code is required"),
})

export const validationSchemaNewPassword = yup.object({
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .matches(/^[a-zA-Z0-9]+$/, "Password should contain only numbers and letters")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your confirm password")
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Both password need to be the same"),
})
