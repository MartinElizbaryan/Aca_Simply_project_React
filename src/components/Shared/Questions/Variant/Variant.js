import Grid from "@mui/material/Grid"
import AddButton from "../../Buttons/AddButton/AddButton"
import { TextField } from "@mui/material"
import useStyles from "../Question/style"
import Radios from "../Radios/Radios"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Variant({ answers, questionIndex, formik }) {
  const { t } = useTranslation()
  const [variant, setVariant] = useState("")
  // const [error, setError] = useState("")

  const addVariantRadio = () => {
    if (variant !== "") {
      formik.setFieldValue(`questions[${questionIndex}].answers`, [
        ...formik.values.questions[questionIndex].answers,
        { title: variant, status: false },
      ])
      // setError("")
    } else {
      // setError(t("Variant_empty"))
    }

    setVariant("")
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
              label={t("Variant_Title")}
              variant="outlined"
              name="variant"
              onChange={(e) => setVariant(e.target.value)}
              value={variant}
              size="normal"
              sx={{
                marginRight: 2,
              }}
              // error={error}
              // helperText={error}
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
