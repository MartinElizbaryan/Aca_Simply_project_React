import * as yup from "yup"

export const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(3, "Name should be of minimum 3 characters length")
    .max(50, "Name should be of maximum 50 characters length")
    .matches(/^[a-zA-Zա-ևԱ-Ֆ-]+$/, "Name should contains only english and armenian letters")
    .required("Name is required"),
  surname: yup
    .string("Enter your surname")
    .min(3, "Surname should be of minimum 3 characters length")
    .max(50, "Surname should be of maximum 50 characters length")
    .matches(/^[a-zA-Zա-ևԱ-Ֆ-]+$/, "Surname should contains only english and armenian letters")
    .required("Surname is required"),
  email: yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .matches(/^[a-zA-Z0-9]+$/, "Password should contains only numbers and letters")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your confirm password")
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Both password need to be the same"),
})
