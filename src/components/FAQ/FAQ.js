import { Container, Stack, Typography } from "@mui/material"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { Question } from "../Shared/Accordions/Question/Question"
import useStyles from "./styles"
import { colors } from "../../constants/styles"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"

export default function FAQ() {
  const classes = useStyles()
  const { data, error, loading } = useFetch("/faq")
  const [faqs, setFAQs] = useState([])
  useEffect(() => {
    setFAQs(data.faq)
  }, [data])

  return (
    <>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          FAQs
        </Typography>
        <Typography variant="body2">
          Find answers to the questions and topics that we are most commonly asked about Lost &
          Found.
        </Typography>
        <Stack p={4} spacing={2}>
          {faqs?.map((faq) => (
            <Question key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </Stack>
        <Typography variant="caption">
          Still have questions?
          <Link url="/contact" color={colors.darkBlue} content=" Contact us " />
          and let us know how we can help you.
        </Typography>
      </Container>
    </>
  )
}
