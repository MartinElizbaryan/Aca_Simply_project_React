import { Container, Stack, Typography, useTheme } from "@mui/material"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { Question } from "../Shared/Accordions/Question/Question"
import useStyles from "./styles"
import { colors } from "../../constants/styles"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const FAQ = () => {
  const { t } = useTranslation()
  const [faqs, setFAQs] = useState([])
  const { data, error, loading } = useFetch("/faq")
  const theme = useTheme()
  const classes = useStyles()

  useEffect(() => {
    setFAQs(data.faq)
  }, [data])

  return (
    <>
      <Container className={classes.container} maxWidth={false}>
        <Typography variant="h4" className={classes.header} color={theme.palette.mainColor}>
          {t("FAQ")}
        </Typography>
        <Typography variant="body2" color={theme.palette.mainColor}>
          {t("find_answers")}
        </Typography>
        <Stack p={4} spacing={2}>
          {faqs?.map((faq) => (
            <Question key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </Stack>
        <Typography variant="caption" color={theme.palette.mainColor}>
          {t("still_have_questions")}
          <Link url="/contact" color={colors.darkBlue}>
            {t("Contact_us")}
          </Link>
          {t("let_us_know")}
        </Typography>
      </Container>
    </>
  )
}

export default FAQ
