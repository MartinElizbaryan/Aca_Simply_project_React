import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material"
import { useState } from "react"

export const Questions = ({ questions, handleAnswer }) => {
  console.log(questions)
  return (
    <div>
      {questions?.map((question, questionIndex) => {
        return (
          <Grid item xs={12} key={question.id}>
            <Typography>{question.title}</Typography>
            <FormControl>
              <RadioGroup name="radio-buttons-group">
                {question.answers.map((answer, answerIndex) => {
                  return (
                    <FormControlLabel
                      checked={answer.checked}
                      key={answer.id}
                      value={answer.title}
                      control={<Radio required={true} />}
                      label={answer.title}
                      onChange={(e) => {
                        handleAnswer(e, questionIndex, answerIndex)
                      }}
                    />
                  )
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        )
      })}
    </div>
  )
}
