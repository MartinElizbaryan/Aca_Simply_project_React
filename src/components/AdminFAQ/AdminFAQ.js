import { Container, Stack, Typography } from "@mui/material"
import useStyles from "./styles"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import api from "../../api/api"
import { Question } from "../Shared/Accordions/Question/Question"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import Grid from "@mui/material/Grid"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"

export default function AdminFAQ() {
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
      <Grid container spacing={0} mt={10}>
        <SidebarCabinet />
        <Grid item xs={12} md={9}>
          <Container className={classes.container} maxWidth={false}>
            <Typography variant="h4" className={classes.header}>
              FAQs
            </Typography>

            <Link url="/profile/faq/create" content={<BlueButton title={"Create"} />} />

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
        </Grid>
      </Grid>
    </>
  )
}
