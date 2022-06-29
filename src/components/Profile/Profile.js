import { useState } from "react"
import { useSelector } from "react-redux"
import { Avatar, Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import { SuccessAlert } from "../Shared/Alerts/SuccessAlert/SuccessAlert"
import { ErrorAlert } from "../Shared/Alerts/ErrorAlert/ErrorAlert"
import UnlabeledInput from "../Shared/Inputs/UnlabeledInput/UnlabeledInput"
import useStyles from "./styles"

export default function Profile() {
  const { info } = useSelector((state) => state.user)
  const [name, setName] = useState(info.name)
  const [surname, setSurname] = useState(info.surname)
  const [email, setEmail] = useState(info.email)
  const [phone, setPhone] = useState(info.phone || "")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const classes = useStyles()

  const onSuccessAlertClose = () => {
    setSuccess(false)
  }
  const onErrorAlertClose = () => {
    setError(false)
  }

  return (
    <Grid container spacing={0} mt={10}>
      <Grid item xs={12} md={3} mt={1} p={2}>
        <Paper elevation={2}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <SidebarCabinet />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <SidebarMobileCabinet />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} p={2} mt={1} sx={{ margin: "auto" }}>
        <Paper elevation={4} sx={{ padding: 5 }}>
          <Grid item container direction="row" xs={12} alignItems="center">
            <Avatar className={classes.avatar} aria-label="avatar">
              {info.name && `${info.name[0]}${info.surname[0]}`}
            </Avatar>
            <Typography variant="body1" pl={2}>
              {info?.name} {info?.surname}
            </Typography>
          </Grid>
          <Stack sx={{ margin: "auto", marginTop: 5 }} spacing={4}>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Grid item xs={5} className={classes.label}>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Name
                </Typography>
              </Grid>
              <Grid item>
                <UnlabeledInput value={name} onChange={(e) => setName(e.target.value)} />
              </Grid>
            </Stack>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Grid item xs={5} className={classes.label}>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Surname
                </Typography>
              </Grid>
              <Grid item>
                <UnlabeledInput value={surname} onChange={(e) => setSurname(e.target.value)} />
              </Grid>
            </Stack>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Grid item xs={5} className={classes.label}>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
              </Grid>
              <Grid item>
                <UnlabeledInput value={email} onChange={(e) => setEmail(e.target.value)} disabled />
              </Grid>
            </Stack>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Grid item xs={5} className={classes.label}>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Phone
                </Typography>
              </Grid>
              <Grid item>
                <UnlabeledInput value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Grid>
            </Stack>
            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={async () => {
                  // const res = await changePassword({ oldPassword, newPassword, confirmPassword })
                  // if (res.status === 204) setOpen(true)
                  // else
                  // setSuccess(true)
                  setError(true)
                }}
              >
                Change Password
              </Button>
            </Grid>
            {success && (
              <SuccessAlert
                message={"Your password has been changed!"}
                onClose={onSuccessAlertClose}
              />
            )}
            {error && (
              <ErrorAlert message={"Oops! Something went wrong!"} onClose={onErrorAlertClose} />
            )}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}
