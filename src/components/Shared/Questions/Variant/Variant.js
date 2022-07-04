import Grid from "@mui/material/Grid"
import AddButton from "../../Buttons/AddButton/AddButton"
import { TextField } from "@mui/material"
import useStyles from "../Question/style"
import Radios from "../Radios/Radios"
import { useState } from "react"

export default function Variant({ answers, questionIndex, formik }) {
  const [variant, setVariant] = useState("")
  console.log(formik.errors)
  const addVariantRadio = () => {
    formik.setFieldValue(`questions[${questionIndex}].answers`, [
      ...formik.values.questions[questionIndex].answers,
      { title: variant, status: false },
    ])
    setVariant("")
    console.log("dsa")
  }
  const classes = useStyles()
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12} display="flex" alignItems="center">
        <Grid container spacing={2}>
          <Grid item xs={12} display="flex" alignItems="center">
            <TextField
              className={classes.input}
              fullWidth
              label="Variant Title"
              variant="outlined"
              name="variant"
              onChange={(e) => setVariant(e.target.value)}
              value={variant}
              size="normal"
              sx={{
                marginRight: 2,
              }}
            />
            <AddButton onClick={addVariantRadio} />
          </Grid>
        </Grid>
      </Grid>
      {answers &&
        answers.map((answer, answerIndex) => {
          return (
            <Radios
              key={answerIndex}
              answerIndex={answerIndex}
              answer={answer}
              questionIndex={questionIndex}
              formik={formik}
            />
          )
        })}
    </Grid>
  )
}
