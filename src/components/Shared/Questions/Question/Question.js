import React from "react"
import { useTranslation } from "react-i18next"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { IconButton } from "@mui/material"
import RadioGroup from "@mui/material/RadioGroup"
import DeleteIcon from "@mui/icons-material/Delete"
import TextField from "@mui/material/TextField"
import Variant from "../Variant/Variant"
import useStyles from "./style"

export default function Question({ questionIndex, question, formik }) {
  const { t } = useTranslation()
  const classes = useStyles()

  const handelDeleteQuestion = (questionIndex) => {
    formik.setFieldValue(
      "questions",
      formik.values.questions.filter((question, qIndex) => {
        return qIndex !== questionIndex
      })
    )
  }

  return (
    <Box>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} display="flex" alignItems="center">
          <TextField
            className={classes.input}
            fullWidth
            label={t("Question_Title")}
            variant="outlined"
            size="normal"
            // name={name}
            onChange={(e) =>
              formik.setFieldValue(`questions[${questionIndex}].title`, e.target.value)
            }
            // name={`questions[${questionIndex}].title`}
            value={formik.values?.questions[questionIndex]?.title}
            error={
              !!(
                formik.touched.questions &&
                formik.touched.questions[questionIndex] &&
                formik.touched.questions[questionIndex]?.title
              ) &&
              !!(
                formik.errors.questions &&
                formik.errors.questions[questionIndex] &&
                formik.errors.questions[questionIndex]?.title
              )
            }
            helperText={
              !!(formik.touched.questions && formik.touched.questions[questionIndex]?.title) &&
              !!(formik.errors.questions && formik.errors.questions[questionIndex]?.title) &&
              formik.errors.questions[questionIndex].title
            }
          />
          <IconButton size="large" onClick={() => handelDeleteQuestion(questionIndex)}>
            <DeleteIcon fontSize="inherit" color="error" />
          </IconButton>
        </Grid>
      </Grid>
      <RadioGroup name="radio-buttons-group">
        <Variant formik={formik} answers={question.answers} questionIndex={questionIndex} />
      </RadioGroup>
    </Box>
  )
}
