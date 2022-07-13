import { useState } from "react"
import { Container, Grid, Stack, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import EmailIcon from "@mui/icons-material/Email"
import CallIcon from "@mui/icons-material/Call"
import SendIcon from "@mui/icons-material/Send"
import { OutlinedInput } from "../Shared/Inputs/OutlinedInput/OutlinedInput"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { sendMessage } from "./utils"
import { colors } from "../../constants/styles"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth={false}>
      <Typography variant="h4" className={classes.header}>
        {t("Contact_us")}
      </Typography>
      <Stack spacing={{ xs: 3, sm: 10, md: 20 }} direction={{ xs: "column", sm: "row" }}>
        <Stack>
          <Typography variant="body1">
            {t("have_questions")}
            <Link url="/faq" color={colors.darkBlue} content=" FAQs " />
            {t("describe_question")}
          </Typography>
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} sm={6}>
              <OutlinedInput
                label={t("Name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12} sm={6}>
              <OutlinedInput
                label={t("Surname")}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label={t("Email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label={t("Subject")}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label={t("Message")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                minRows={6}
                maxRows={10}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <GreenButton
                size="large"
                onClick={() => sendMessage({ name, surname, email, subject, message })}
              >
                <SendIcon sx={{ paddingRight: 2 }} />
                {t("Send")}
              </GreenButton>
            </Grid>
          </Grid>
        </Stack>
        <Stack>
          <Typography variant="subtitle1">{t("Other_ways")}</Typography>
          <Grid container spacing={4} p={3}>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <HomeIcon />
                <Typography variant="body1">{t("Visit_us")}</Typography>
              </Stack>
              <Typography variant="caption">{t("fake_address")}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <CallIcon />
                <Typography variant="body1">{t("Call_us")}</Typography>
              </Stack>
              <Typography variant="caption">+374-33-613-003</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <EmailIcon />
                <Typography variant="body1">{t("Email_us")}</Typography>
              </Stack>
              <Typography variant="caption">lost.list.found@gmail.com</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
