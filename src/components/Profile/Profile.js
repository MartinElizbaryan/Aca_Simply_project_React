import { useState } from "react"
import { useSelector } from "react-redux"
import { Grid, Paper, Stack, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import { SuccessAlert } from "../Shared/Alerts/SuccessAlert/SuccessAlert"
import { ErrorAlert } from "../Shared/Alerts/ErrorAlert/ErrorAlert"
import UnlabeledInput from "../Shared/Inputs/UnlabeledInput/UnlabeledInput"
import useStyles from "./styles"
import { useFormik } from "formik"
import { validationSchema } from "./vaildation"
import { getUserFullName } from "../../helpers/utils"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"

export default function Profile() {
  const { info } = useSelector((state) => state.user)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const classes = useStyles()

  const onSuccessAlertClose = () => {
    setSuccess(false)
  }
  const onErrorAlertClose = () => {
    setError(false)
  }

  const formik = useFormik({
    initialValues: {
      name: info.name,
      surname: info.surname,
      phone: info.phone || "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ name, surname, phone }) => {
      console.log(name, surname, phone)
      setSuccess(true)
    },
  })

  return (
    <Grid container spacing={0} mt={10}>
      <SidebarCabinet />
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    display: {*/}
      {/*      xs: "block",*/}
      {/*      md: "none",*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <SidebarMobileCabinet />*/}
      {/*</Box>*/}
      <Grid item xs={12} sm={7} p={2} mt={1} sx={{ margin: "auto" }}>
        <Paper elevation={4} sx={{ padding: 5 }}>
          <Grid item container direction="row" xs={12} alignItems="center">
            <UserAvatar user={info} />
            <Typography variant="body1" pl={2}>
              {getUserFullName(info)}
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit} id="editForm">
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
                  <UnlabeledInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
                    Surname
                  </Typography>
                </Grid>
                <Grid item>
                  <UnlabeledInput
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    name="surname"
                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                    helperText={formik.touched.surname && formik.errors.surname}
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
                    Email
                  </Typography>
                </Grid>
                <Grid item>
                  <UnlabeledInput value={info.email || ""} disabled />
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
                  <UnlabeledInput
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
              </Stack>
              <Grid item xs={12}>
                <GreenButton title="Save Changes" type="submit" />
                {/*<Button*/}
                {/*  variant="contained"*/}
                {/*  className={classes.button}*/}
                {/*  onClick={async () => {*/}
                {/*    // const res = await changePassword({ oldPassword, newPassword, confirmPassword })*/}
                {/*    // if (res.status === 204) setOpen(true)*/}
                {/*    // else*/}
                {/*    // setSuccess(true)*/}
                {/*    setError(true)*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Change Password*/}
                {/*</Button>*/}
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
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}
