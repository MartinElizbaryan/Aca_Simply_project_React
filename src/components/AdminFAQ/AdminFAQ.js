import { Container, Stack, Typography } from "@mui/material"
import useStyles from "./styles"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import api from "../../api/api"
import { Question } from "../Shared/Accordions/Question/Question"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { useTranslation } from "react-i18next"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"

const AdminFAQ = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const { data, error, loading, reFetch: reFetchFAQs } = useFetch("/faq")
  const [faqs, setFAQs] = useState([])
  useEffect(() => {
    setFAQs(data.faq)
  }, [data])

  const deleteFAQ = async (e, id) => {
    e.stopPropagation()
    await api.delete(`/admin/faq/${id}`)
    reFetchFAQs()
  }

  return (
    <>
      <Container className={classes.container} maxWidth={false}>
        <Typography variant="h4" className={classes.header}>
          FAQs
        </Typography>
        <Link url="/profile/faq/create">
          <BlueButton>{t("Create")}</BlueButton>
        </Link>
        <Stack p={4} spacing={2}>
          {faqs?.map((faq) => (
            <Question
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              editable
              deleteFAQ={deleteFAQ}
            />
          ))}
        </Stack>
      </Container>
    </>
  )
}

export default withSuspenseAdding(AdminFAQ)
