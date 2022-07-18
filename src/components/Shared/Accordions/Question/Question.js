import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
  Box,
} from "@mui/material"
import { ExpandMore, FormatQuote, QuestionMark, Edit } from "@mui/icons-material"
import useStyles from "./styles"
import { CustomLink as Link } from "../../Links/CustomLink/CustomLink"
import DeleteIcon from "@mui/icons-material/Delete"

export function Question({ question, answer, editable, deleteFAQ, id }) {
  const classes = useStyles()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
        classes={{ content: classes.content2 }}
      >
        <Box className={classes.content}>
          <QuestionMark className={classes.icon} />
          <Typography>{question}</Typography>
        </Box>
        <Box className={classes.flexEnd}>
          {editable && (
            <Link url={`/profile/faq/${id}`}>
              <IconButton aria-label="edit" color="error">
                <Edit />
              </IconButton>
            </Link>
          )}

          {editable && (
            <IconButton aria-label="delete" color="error" onClick={(e) => deleteFAQ(e, id)}>
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <FormatQuote className={classes.icon} />
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
