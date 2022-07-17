import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material"

export const Questions = ({ questions, handleAnswer }) => {
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
                      key={answer.id}
                      value={answer.title}
                      control={<Radio />}
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
