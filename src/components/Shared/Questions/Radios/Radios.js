import Grid from "@mui/material/Grid"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export default function Radios({ answer, answerIndex, questionIndex, formik }) {
  const handelDeleteAnswer = (questionIndex, answerIndex) => {
    formik.setFieldValue(
      `questions[${questionIndex}].answers`,
      formik.values.questions[questionIndex].answers.filter((answer, aIndex) => {
        return aIndex !== answerIndex
      })
    )
  }

  const variantInputValue = answer.title.split(" ").join("").toLowerCase()
  const setStatus = (e) => {
    formik.values.questions[questionIndex].answers.map((item) => {
      item.status = false
    })
    formik.setFieldValue(
      `questions[${questionIndex}].answers[${answerIndex}].status`,
      e.target.checked
    )
  }
  return (
    <Grid item xs={12} display="flex" align="center" justifyContent={"space-between"}>
      <FormGroup>
        <FormControlLabel
          value={variantInputValue}
          control={<Radio name="answer" value={variantInputValue} />}
          label={answer.title}
          onChange={(e) => {
            setStatus(e)
          }}
        />
      </FormGroup>
      <IconButton color="error" onClick={() => handelDeleteAnswer(questionIndex, answerIndex)}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  )
}
