import * as yup from "yup"

export const faqValidationSchema = yup.object().shape({
  answer: yup
    .string("Enter Title")
    .min(10, "Answer should be of minimum 3 characters length")
    .required("Answer is required"),
  question: yup
    .string("Enter Description")
    .min(10, "Question should be of minimum 10 characters length")
    .required("Question is required"),
})
