import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import {
  Container,
  Divider,
  Grid,
  ListItemButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import { UserInfo } from "../Shared/UserInfo/UserInfo"
import { ErrorDialog } from "../Shared/Dialogs/ErrorDialog/ErrorDialog"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import UnlabeledInput from "../Shared/Inputs/UnlabeledInput/UnlabeledInput"
import { SuccessDialog } from "../Shared/Dialogs/SuccessDialog/SuccessDialog"
import { validationSchema } from "./vaildation"
import { setUserInfo } from "../../redux/user/userSlice"
import { getUserInfo } from "../../redux/user/userSelectors"
import useStyles from "./styles"
import useLazyFetch from "../../hooks/useLazyFetch"

const Profile = () => {
  const { t } = useTranslation()
  const user = useSelector(getUserInfo)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()
  const { data, error: errorFromRequest, apiRequest } = useLazyFetch()

  const onSuccessDialogClose = () => {
    setSuccess(false)
  }
  const onErrorDialogClose = () => {
    setError(false)
  }
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      name: user.name || "",
      surname: user.surname || "",
      phone: user.phone || "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async ({ name, surname, phone }) => {
      await apiRequest("/users", "put", { name, surname, phone })
    },
  })

  useEffect(() => {
    if (data.status === 200) {
      setSuccess(true)
      dispatch(setUserInfo(data.user))
    } else if (errorFromRequest) setError(true)
  }, [data])

  return (
    <>
      <Container sx={{ paddingTop: 1, marginBottom: 1, backgroundColor: theme.palette.body }}>
        <Paper>
          <ListItemButton>
            <UserInfo user={user} />
          </ListItemButton>
          <Divider />
          <form onSubmit={formik.handleSubmit} id="editForm" className={classes.form}>
            <Stack
              spacing={4}
              p={4}
              sx={{
                maxWidth: 320,
              }}
            >
              <Grid
                container
                sx={{ display: "flex", flexDirection: "row" }}
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Name")}</Typography>
                </Grid>
                <Grid item xs={7}>
                  <UnlabeledInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    fullWidth
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ display: "flex", flexDirection: "row" }}
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Surname")}</Typography>
                </Grid>
                <Grid item xs={7}>
                  <UnlabeledInput
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    name="surname"
                    fullWidth
                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                    helperText={formik.touched.surname && formik.errors.surname}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                sx={{ display: "flex", flexDirection: "row" }}
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Email")}</Typography>
                </Grid>
                <Grid item xs={7}>
                  <UnlabeledInput value={user.email || ""} disabled fullWidth />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ display: "flex", flexDirection: "row" }}
                justifyContent={"space-between"}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Phone")}</Typography>
                </Grid>
                <Grid item xs={7}>
                  <UnlabeledInput
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    fullWidth
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "start" }}>
                <BlueButton type="submit" size="small">
                  {t("Save_Changes")}
                </BlueButton>
              </Grid>
              <SuccessDialog
                open={success}
                onClose={onSuccessDialogClose}
                message={t("Your_info_changed")}
              />
              <ErrorDialog
                open={error}
                onClose={onErrorDialogClose}
                message={t("oops_went_wrong")}
              />
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default Profile
