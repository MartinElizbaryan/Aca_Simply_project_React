import { Container, TextField, Typography } from "@mui/material"
import useStyles from "./styles"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import api from "../../api/api"
import { useFormik } from "formik"
import { validation } from "./validation"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"
import { useTranslation } from "react-i18next"

const AdminFAQEdit = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, error, loading, reFetch: reFetchFAQs } = useFetch(`/admin/faq/${id}`)
  const [faq, setFAQ] = useState([])
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  // console.log("answer", answer)
  // console.log("question", question)

  useEffect(() => {
    const { faq } = data
    setFAQ(faq)
    formik.setFieldValue("answer", faq?.answer)
    formik.setFieldValue("question", faq?.question)
  }, [data])

  const updateFAQ = async (values) => {
    try {
      await api.put(`/admin/faq/${id}`, values)
      navigate("/profile/faq")
    } catch (error) {
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: {
      answer: "",
      question: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values)
      updateFAQ(values)
    },
  })
  return (
    <>
      <Container className={classes.container} maxWidth={false}>
        <Typography variant="h4" className={classes.header}>
          {t("FAQ")}
        </Typography>

        <Grid item xs={12} md={9} mt={6}>
          <form onSubmit={formik.handleSubmit}>
            <Box mt={5} mb={5}>
              <Grid container spacing={2} p={2}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    label={t("Question")}
                    variant="outlined"
                    size="normal"
                    onChange={formik.handleChange}
                    value={formik.values.question}
                    name="question"
                    error={formik.touched.question && Boolean(formik.errors.question)}
                    helperText={formik.touched.question && formik.errors.question}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    label={t("Answer")}
                    variant="outlined"
                    size="normal"
                    multiline
                    minRows={5}
                    maxRows={10}
                    onChange={formik.handleChange}
                    value={formik.values.answer}
                    name="answer"
                    error={formik.touched.answer && Boolean(formik.errors.answer)}
                    helperText={formik.touched.answer && formik.errors.answer}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} p={2}>
                <Grid item xs={8} sm={6} md={4}>
                  <BlueButton className={classes.button} type="submit">
                    {t("Save_Changes")}
                  </BlueButton>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Container>
    </>
  )
}

export default AdminFAQEdit
