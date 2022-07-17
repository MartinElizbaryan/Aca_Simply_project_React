import * as yup from "yup"

const validationSchema = yup.object().shape({
  name: yup
    .string("Enter Title")
    .min(3, "Title should be of minimum 3 characters length")
    .max(50, "Title should be of maximum 50 characters length")
    .required("Title is required"),
  address: yup
    .string("Enter Address")
    .min(4, "Address should be of minimum 4 characters length")
    .max(50, "Address should be of maximum 50 characters length")
    .required("Address is required"),
  description: yup
    .string("Enter Description")
    .min(3, "Description should be of minimum 50 characters length")
    .required("Description is required"),
  category_id: yup.string("Enter Category").required("Category is required"),
  type: yup.string("Enter Type").required("Type is required"),
})
export default validationSchema
