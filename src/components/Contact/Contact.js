import { Container, Grid, Stack, Typography, useTheme } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import EmailIcon from "@mui/icons-material/Email"
import CallIcon from "@mui/icons-material/Call"
import SendIcon from "@mui/icons-material/Send"
import { OutlinedInput } from "../Shared/Inputs/OutlinedInput/OutlinedInput"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { colors } from "../../constants/styles"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import { useFormik } from "formik"
import { validationSchema } from "./validationSchema"
import { sendMessage } from "./utils"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"

const Contact = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      sendMessage(values)
    },
  })
  return (
    <Container className={classes.container} maxWidth={false}>
      <Typography variant="h4" component={"h1"} color={theme.palette.mainColor}>
        {t("Contact_us")}
      </Typography>
      <Stack spacing={{ xs: 3, sm: 10, md: 20 }} direction={{ xs: "column", sm: "row" }}>
        <Stack>
          <Typography variant="body1" color={theme.palette.mainColor}>
            {t("have_questions")}
            <Link url="/faq" color={colors.darkBlue}>
              {" FAQs "}
            </Link>
            {t("describe_question")}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} p={3}>
              <Grid item xs={12} sm={6}>
                <OutlinedInput
                  label={t("Name")}
                  onChange={(e) => {
                    formik.setFieldValue("name", e.target.value)
                  }}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                ></OutlinedInput>
              </Grid>
              <Grid item xs={12} sm={6}>
                <OutlinedInput
                  label={t("Surname")}
                  onChange={(e) => {
                    formik.setFieldValue("surname", e.target.value)
                  }}
                  value={formik.values.surname}
                  error={formik.touched.surname && Boolean(formik.errors.surname)}
                  helperText={formik.touched.surname && formik.errors.surname}
                ></OutlinedInput>
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput
                  label={t("Email")}
                  onChange={(e) => {
                    formik.setFieldValue("email", e.target.value)
                  }}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                ></OutlinedInput>
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput
                  label={t("Subject")}
                  onChange={(e) => {
                    formik.setFieldValue("subject", e.target.value)
                  }}
                  value={formik.values.subject}
                  error={formik.touched.subject && Boolean(formik.errors.subject)}
                  helperText={formik.touched.subject && formik.errors.subject}
                ></OutlinedInput>
              </Grid>
              <Grid item xs={12}>
                <OutlinedInput
                  label={t("Message")}
                  onChange={(e) => {
                    formik.setFieldValue("message", e.target.value)
                  }}
                  value={formik.values.message}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  multiline
                  minRows={6}
                  maxRows={10}
                ></OutlinedInput>
              </Grid>
              <Grid item xs={12}>
                <GreenButton size="large" type="submit">
                  <SendIcon sx={{ paddingRight: 2 }} />
                  {t("Send")}
                </GreenButton>
              </Grid>
            </Grid>
          </form>
        </Stack>
        <Stack>
          <Typography variant="subtitle1" color={theme.palette.mainColor}>
            {t("Other_ways")}
          </Typography>
          <Grid container spacing={4} p={3}>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <HomeIcon
                  sx={{
                    color: theme.palette.mainColor,
                  }}
                />
                <Typography variant="body1" color={theme.palette.mainColor}>
                  {t("Visit_us")}
                </Typography>
              </Stack>
              <Typography variant="caption" color={theme.palette.mainColor}>
                {t("fake_address")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <CallIcon
                  sx={{
                    color: theme.palette.mainColor,
                  }}
                />
                <Typography variant="body1" color={theme.palette.mainColor}>
                  {t("Call_us")}
                </Typography>
              </Stack>
              <Typography variant="caption" color={theme.palette.mainColor}>
                +374-33-613-003
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <EmailIcon
                  sx={{
                    color: theme.palette.mainColor,
                  }}
                />
                <Typography variant="body1" color={theme.palette.mainColor}>
                  {t("Email_us")}
                </Typography>
              </Stack>
              <Typography variant="caption" color={theme.palette.mainColor}>
                lost.list.found@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}

export default withSuspenseAdding(Contact)
