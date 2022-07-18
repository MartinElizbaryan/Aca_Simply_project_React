import { Container, TextField, Typography } from "@mui/material"
import useStyles from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import api from "../../api/api"
import { useFormik } from "formik"
import { validation } from "../AdminFAQEdit/validation"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"
import { useTranslation } from "react-i18next"

const AdminFAQCreate = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const { id } = useParams()
  const navigate = useNavigate()

  const updateFAQ = async (values) => {
    try {
      await api.post("/admin/faq", values)
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

export default AdminFAQCreate
