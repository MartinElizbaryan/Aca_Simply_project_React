import { useState } from "react"
import { useSelector } from "react-redux"
import { Avatar, Button, Grid, Paper, Stack, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import PasswordInput from "../Shared/Inputs/PasswordInput/PasswordInput"
import { SuccessAlert } from "../Shared/Alerts/SuccessAlert/SuccessAlert"
import { ErrorAlert } from "../Shared/Alerts/ErrorAlert/ErrorAlert"
import { getFirstLetters, getUserFullName } from "../../helpers/utils"
import useStyles from "./styles"

export default function ChangePassword() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { info } = useSelector((state) => state.user)

  const classes = useStyles()

  const onSuccessAlertClose = () => {
    setSuccess(false)
  }
  const onErrorAlertClose = () => {
    setError(false)
  }

  return (
    <Grid container spacing={0} mt={10}>
      <Grid item xs={12} sm={4} mt={1} p={2}>
        <Paper elevation={2} sx={{ maxWidth: 300 }}>
          <SidebarCabinet />
          {/*<SidebarMobileCabinet />*/}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={7} p={2} sx={{ margin: "auto", marginTop: 1 }}>
        <Paper elevation={4} sx={{ padding: 5 }}>
          <Grid item container direction="row" xs={12} alignItems="center">
            <Avatar className={classes.avatar} aria-label="avatar">
              {getFirstLetters(info)}
            </Avatar>
            <Typography variant="body1" pl={2}>
              {getUserFullName(info)}
            </Typography>
          </Grid>
          <Typography variant="body2" pt={3}>
            Enter your current password along with a new one to change it.
          </Typography>
          <Stack sx={{ margin: "auto", marginTop: 5 }} spacing={4}>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Grid item xs={5} className={classes.label}>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Current Password
                </Typography>
              </Grid>
              <Grid item>
                <PasswordInput
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
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
                  New Password
                </Typography>
              </Grid>
              <Grid item>
                <PasswordInput
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
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
                  Confirm Password
                </Typography>
              </Grid>
              <Grid item>
                <PasswordInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
