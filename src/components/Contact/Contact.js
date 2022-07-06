import { useState } from "react"
import { Container, Grid, Stack, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import EmailIcon from "@mui/icons-material/Email"
import CallIcon from "@mui/icons-material/Call"
import SendIcon from "@mui/icons-material/Send"
import { OutlinedInput } from "../Shared/Inputs/OutlinedInput/OutlinedInput"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { sendMessage } from "./utils"
import { colors } from "../../constants/styles"
import useStyles from "./styles"

export default function Contact() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth={false}>
      <Typography variant="h4" className={classes.header}>
        Contact us
      </Typography>
      <Stack spacing={{ xs: 3, sm: 10, md: 20 }} direction={{ xs: "column", sm: "row" }}>
        <Stack>
          <Typography variant="body1">
            Do you have any questions or issues? Check the
            <Link url="/faq" color={colors.darkBlue} content=" FAQs " />
            or describe your problem in the form below.
          </Typography>
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} sm={6}>
              <OutlinedInput
                label="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12} sm={6}>
              <OutlinedInput
                label="Last Name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label="Message"
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
                Send
              </GreenButton>
            </Grid>
          </Grid>
        </Stack>
        <Stack>
          <Typography variant="subtitle1">Other ways to contact us:</Typography>
          <Grid container spacing={4} p={3}>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <HomeIcon />
                <Typography variant="body1">Visit us</Typography>
              </Stack>
              <Typography variant="caption">
                203 Fake St. Mountain View, San Francisco, California, USA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <CallIcon />
                <Typography variant="body1">Call us</Typography>
              </Stack>
              <Typography variant="caption">+374-33-613-003</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} className={classes.info}>
                <EmailIcon />
                <Typography variant="body1">Email us</Typography>
              </Stack>
              <Typography variant="caption">lost.list.found@gmail.com</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
