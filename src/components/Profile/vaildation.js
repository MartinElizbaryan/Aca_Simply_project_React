import * as yup from "yup"

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .max(50, "Name should be of maximum 50 characters length")
    .matches(/^[a-zA-Zա-ևԱ-Ֆ-]+$/, "Name should contain only english and armenian letters")
    .required("Name is required"),
  surname: yup
    .string()
    .min(3, "Name should be of minimum 3 characters length")
    .max(50, "Name should be of maximum 50 characters length")
    .matches(/^[a-zA-Zա-ևԱ-Ֆ-]+$/, "Surname should contain only english and armenian letters")
    .required("Surname is required"),
  phone: yup
    .string()
    .min(10, "Phone should be of minimum 10 characters length")
    .max(30, "Phone should be of maximum 30 characters length")
    .matches(/^[0-9+-]+$/, "Phone should contain only numbers, + and - characters."),
})
