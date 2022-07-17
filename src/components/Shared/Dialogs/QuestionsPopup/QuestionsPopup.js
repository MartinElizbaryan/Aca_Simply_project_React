import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"

export const QuestionsPopup = ({ questions, handleAnswer }) => {
  return (
    <div>
      {questions?.map((question, questionIndex) => {
        return (
          <div key={question.id}>
            <p>{question.title}</p>

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
          </div>
        )
      })}
    </div>
  )
}
