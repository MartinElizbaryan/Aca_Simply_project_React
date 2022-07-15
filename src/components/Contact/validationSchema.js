import * as yup from "yup"

export const validationSchema = yup.object().shape({
  name: yup.string("Enter Name").required("Name is required"),
  surname: yup.string("Enter Surname").required("Surname is required"),
  email: yup.string("Enter Email").email().required("Email is required"),
  subject: yup.string("Enter Subject").required("Subject is required"),
  message: yup.string("Enter Message").required("message is required"),
})
