import { useState } from "react"
import { useSelector } from "react-redux"
import { Grid, Paper, Stack, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import PasswordInput from "../Shared/Inputs/PasswordInput/PasswordInput"
import { SuccessAlert } from "../Shared/Alerts/SuccessAlert/SuccessAlert"
import { ErrorAlert } from "../Shared/Alerts/ErrorAlert/ErrorAlert"
import { getUserFullName } from "../../helpers/utils"
import useStyles from "./styles"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { useFormik } from "formik"
import { validationSchema } from "./vaildation"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { changePassword } from "./utils"
import { useTranslation } from "react-i18next"

export default function ChangePassword() {
  const { t } = useTranslation()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
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

  const onSuccessAlertClose = () => {
    setSuccess(false)
  }
  const onErrorAlertClose = () => {
    setError(false)
  }

  return (
    <Grid container spacing={0} mt={10}>
      <SidebarCabinet />
      {/*<SidebarMobileCabinet />*/}
      <Grid item xs={12} md={7} p={2} sx={{ margin: "auto", marginTop: 1 }}>
        <Paper elevation={4} sx={{ padding: 5 }}>
          <Grid item container direction="row" xs={12} alignItems="center" gap={2}>
            <UserAvatar user={info} />
            <Typography variant="body1">{getUserFullName(info)}</Typography>
          </Grid>
          <Typography variant="body2" pt={3}>
            {t("enter_your_pass")}
          </Typography>
          <form onSubmit={formik.handleSubmit} id="editForm" className={classes.form}>
            <Stack sx={{ margin: "auto", marginTop: 5 }} spacing={4}>
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
                <GreenButton type="submit">{t("Change Password")}</GreenButton>
              </Grid>
            </Stack>
          </form>
        </Paper>
        {success && (
          <SuccessAlert message={t("Your_password_changed")} onClose={onSuccessAlertClose} />
        )}
        {error && <ErrorAlert message={t("oops_went_wrong")} onClose={onErrorAlertClose} />}
      </Grid>
    </Grid>
  )
}
