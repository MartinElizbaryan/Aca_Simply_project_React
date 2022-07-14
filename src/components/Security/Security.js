import { useState } from "react"
import { useSelector } from "react-redux"
import { Container, Divider, Grid, ListItem, Paper, Stack, Typography } from "@mui/material"
import PasswordInput from "../Shared/Inputs/PasswordInput/PasswordInput"
import useStyles from "./styles"
import { useFormik } from "formik"
import { validationSchema } from "./vaildation"
import { changePassword, signOutFromOtherDevices } from "./utils"
import { useTranslation } from "react-i18next"
import LogoutIcon from "@mui/icons-material/Logout"
import { TransparentButton } from "../Shared/Buttons/TransparentButton/TransparentButton"
import { ErrorDialog } from "../Shared/Dialogs/ErrorDialog/ErrorDialog"
import { SuccessDialog } from "../Shared/Dialogs/SuccessDialog/SuccessDialog"
import { AlertDialog } from "../Shared/Dialogs/AlertDialog/AlertDialog"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import VpnKeyIcon from "@mui/icons-material/VpnKey"

export default function Security() {
  const { t } = useTranslation()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const { info } = useSelector((state) => state.user)

  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ currentPassword, newPassword, confirmPassword }) => {
      try {
        const res = await changePassword({ currentPassword, newPassword, confirmPassword })
        if (res.status === 204) setSuccess(true)
      } catch (e) {
        console.log(e)
        setError(true)
      }
    },
  })

  const onSuccessDialogClose = () => {
    setSuccess(false)
  }

  const onErrorDialogClose = () => {
    setError(false)
  }

  const onSignOutClick = () => {
    setOpenDialog(true)
  }

  const onAlertDialogClose = () => {
    setOpenDialog(false)
  }

  return (
    <Container sx={{ paddingTop: 1 }}>
      <Paper>
        <ListItem>
          <VpnKeyIcon sx={{ marginRight: 2 }} />
          <Typography>Change password</Typography>
        </ListItem>
        <Divider />
        <Typography variant="body2" pt={3}>
          {t("enter_your_pass")}
        </Typography>
        <form onSubmit={formik.handleSubmit} id="editForm" className={classes.form}>
          <Stack sx={{ margin: "40px" }} spacing={4}>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
            >
              <Grid item xs={5} className={classes.label}>
                <Typography variant="caption">{t("Current_Password")}</Typography>
              </Grid>
              <Grid item>
                <PasswordInput
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  name="currentPassword"
                  error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
                  helperText={formik.touched.currentPassword && formik.errors.currentPassword}
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
                <Typography variant="caption">{t("New_Password")}</Typography>
              </Grid>
              <Grid item>
                <PasswordInput
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  name="newPassword"
                  error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                  helperText={formik.touched.newPassword && formik.errors.newPassword}
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
                <Typography variant="caption">{t("Confirm_Password")}</Typography>
              </Grid>
              <Grid item>
                <PasswordInput
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  name="confirmPassword"
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
              </Grid>
            </Stack>
            <Grid item xs={12} sx={{ textAlign: "start" }}>
              <BlueButton type="submit">{t("Change Password")}</BlueButton>
            </Grid>
          </Stack>
        </form>
        <Divider />
        <TransparentButton onClick={onSignOutClick}>
          <LogoutIcon />
          <Typography ml={2}>Sign out from other devices</Typography>
        </TransparentButton>
      </Paper>

      <AlertDialog
        open={openDialog}
        title={"Are you sure?"}
        message={
          "This will sign you out from every other device that you are currently signed in on. Are you sure you want to continue?"
        }
        handleOk={signOutFromOtherDevices}
        handleClose={onAlertDialogClose}
      />
      <SuccessDialog
        open={success}
        onClose={onSuccessDialogClose}
        message={t("Your_password_changed")}
      />
      <ErrorDialog open={error} onClose={onErrorDialogClose} message={t("oops_went_wrong")} />
    </Container>
  )
}
