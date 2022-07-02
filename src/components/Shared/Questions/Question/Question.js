import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { IconButton } from "@mui/material"
import RadioGroup from "@mui/material/RadioGroup"
import Variant from "../Variant/Variant"
import useStyles from "./style"
import DeleteIcon from "@mui/icons-material/Delete"
import TextField from "@mui/material/TextField"

export default function Quetion({
  setQuestions,
  questionIndex,
  question,
  validationHandle,
  validationValue,
  name,
}) {
  const classes = useStyles()

  const changeTitle = (title) => {
    setQuestions((prevState) => {
      prevState[questionIndex].title = title
      return [...prevState]
    })
  }
  return (
    <Box>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} display="flex" alignItems="center">
          <TextField
            className={classes.input}
            fullWidth
            label="Quetion Title"
            variant="outlined"
            size="normal"
            // name={name}
            value={validationValue}
            onChange={validationHandle}
          />
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" color="error" />
          </IconButton>
        </Grid>
      </Grid>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Variant
          answers={question.answers}
          questionIndex={questionIndex}
          setQuestions={setQuestions}
        />
      </RadioGroup>
    </Box>
  )
}
