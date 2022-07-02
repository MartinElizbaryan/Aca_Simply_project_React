import * as yup from "yup"

export const validationSchema = yup.object({
  email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .matches(/^[a-zA-Z0-9]+$/, "Password should contain only numbers and letters")
    .required("Password is required"),
})
