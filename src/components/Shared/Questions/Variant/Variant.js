import { useState } from "react"
import Grid from "@mui/material/Grid"
import AddButton from "../../Buttons/AddButton/AddButton"
import { TextField } from "@mui/material"
import useStyles from "../Question/style"
import Radios from "../Radios/Radios"

export default function Variant({ answers, questionIndex, setQuestions }) {
  const [radio, setRadio] = useState([])
  const [variantInput, setVariantInput] = useState("")
  const [variantRadioValidate, setVariantRadioValidate] = useState(true)
  const addVariantRadio = () => {
    setQuestions((prevState) => {
      prevState[questionIndex].answers.push({ title: variantInput, status: false })
      return [...prevState]
    })
    setVariantInput("")
  }
  const onVariantChange = (e) => {
    setVariantInput(e.target.value)
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
              value={variantInput}
              onChange={onVariantChange}
              size="normal"
              sx={{
                marginRight: 2,
              }}
              error={variantRadioValidate ? false : true}
              helperText={
                variantRadioValidate
                  ? null
                  : "Variant can't be empty and must be have minimum 2 variants"
              }
            />
            <AddButton onClick={addVariantRadio} />
          </Grid>
        </Grid>
      </Grid>
      {answers &&
        answers.map((answer, answerIndex) => {
          return (
            <Radios
              variantInput={variantInput}
              key={answerIndex}
              answerIndex={answerIndex}
              answer={answer}
              questionIndex={questionIndex}
              setQuestions={setQuestions}
            />
          )
        })}
    </Grid>
  )
}
