import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { ExpandMore, FormatQuote, QuestionMark } from "@mui/icons-material"
import useStyles from "./styles"

export function Question({ question, answer }) {
  const classes = useStyles()

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel-content" id="panel-header">
        <QuestionMark className={classes.icon} />
        <Typography>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <FormatQuote className={classes.icon} />
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
