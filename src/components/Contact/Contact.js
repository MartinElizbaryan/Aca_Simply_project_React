import { useState } from "react"

import { Button, Container, Grid, Typography } from "@mui/material"
import useStyles from "./styles"
import { OutlinedInput } from "../Shared/OutlinedInput/OutlinedInput"
import { sendMessage } from "./utils"

export default function Contact() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid container item xs={12} spacing={12} direction={{ xs: "column", md: "row" }}>
        <Grid item xs={6}>
          <Grid item container spacing={2} p={2}>
            <Grid item xs={6}>
              <OutlinedInput
                label="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={3}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => sendMessage({ name, surname, email, subject, message })}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item container spacing={2} p={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Address</Typography>
              <Typography variant="p">
                203 Fake St. Mountain View, San Francisco, California, USA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Phone</Typography>
              <Typography variant="p">+374-33-613-003</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Email</Typography>
              <Typography variant="p">lost.list.found@gmail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
