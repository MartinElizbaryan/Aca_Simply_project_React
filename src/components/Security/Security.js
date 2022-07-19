import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { useTranslation } from "react-i18next"
import {
  Collapse,
  Container,
  Divider,
  Grid,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import VpnKeyIcon from "@mui/icons-material/VpnKey"
import LogoutIcon from "@mui/icons-material/Logout"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { ErrorDialog } from "../Shared/Dialogs/ErrorDialog/ErrorDialog"
import { AlertDialog } from "../Shared/Dialogs/AlertDialog/AlertDialog"
import PasswordInput from "../Shared/Inputs/PasswordInput/PasswordInput"
import { SuccessDialog } from "../Shared/Dialogs/SuccessDialog/SuccessDialog"
import { validationSchema } from "./vaildation"
import socket from "../../helpers/socket"
import { signOutFromOtherDevices } from "./utils"
import useStyles from "./styles"
import useLazyFetch from "../../hooks/useLazyFetch"

const Security = () => {
  const { t } = useTranslation()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [openPasswordChange, setOpenPasswordChange] = useState(true)
  const { data, error: errorFromRequest, apiRequest } = useLazyFetch()

  const classes = useStyles()

  const socketId = socket.id

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ currentPassword, newPassword, confirmPassword }) => {
      await apiRequest("/users/change-password", "patch", {
        currentPassword,
        newPassword,
        confirmPassword,
      })
    },
  })
  useEffect(() => {
    if (data.status === 204) setSuccess(true)
    else if (errorFromRequest) setError(true)
  }, [data])

  return (
    <Container sx={{ paddingTop: 1, marginBottom: 1 }}>
      <Paper>
        <ListItemButton
          className={classes.listButton}
          onClick={() => setOpenPasswordChange(!openPasswordChange)}
        >
          <VpnKeyIcon sx={{ marginRight: 2 }} />
          <Typography>Change password</Typography>
        </ListItemButton>
        <Collapse in={openPasswordChange}>
          <Divider />
          <Typography variant="body2" p={3}>
            {t("enter_your_pass")}
          </Typography>
          <form onSubmit={formik.handleSubmit} id="editForm" className={classes.form}>
            <Stack
              spacing={4}
              p={4}
              sx={{
                maxWidth: 420,
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Current_Password")}</Typography>
                </Grid>
                <Grid item>
                  <PasswordInput
                    value={formik.values.currentPassword}
                    onChange={formik.handleChange}
                    name="currentPassword"
                    fullWidth
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
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("New_Password")}</Typography>
                </Grid>
                <Grid item>
                  <PasswordInput
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    fullWidth
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
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Confirm_Password")}</Typography>
                </Grid>
                <Grid item>
                  <PasswordInput
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    name="confirmPassword"
                    fullWidth
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
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => setOpenDialog(true)} className={classes.listButton}>
          <LogoutIcon />
          <Typography ml={2}>Sign out from other devices</Typography>
        </ListItemButton>
      </Paper>
      <AlertDialog
        open={openDialog}
        title={"Are you sure?"}
        message={
          "This will sign you out from every other device that you are currently signed in on. Are you sure you want to continue?"
        }
        handleOk={() => signOutFromOtherDevices({ data: { socketId } })}
        handleClose={() => setOpenDialog(false)}
      />
      <SuccessDialog
        open={success}
        onClose={() => setSuccess(false)}
        message={t("Your_password_changed")}
      />
      <ErrorDialog open={error} onClose={() => setError(false)} message={t("oops_went_wrong")} />
    </Container>
  )
}

export default Security
