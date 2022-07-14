import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { Container, Grid, Paper, Stack, Typography } from "@mui/material"
import UnlabeledInput from "../Shared/Inputs/UnlabeledInput/UnlabeledInput"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { editUserInfo } from "./utils"
import { getUserFullName } from "../../helpers/utils"
import { validationSchema } from "./vaildation"
import { setUserInfo } from "../../redux/userSlice"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import { SuccessDialog } from "../Shared/Dialogs/SuccessDialog/SuccessDialog"
import { ErrorDialog } from "../Shared/Dialogs/ErrorDialog/ErrorDialog"

export default function Profile() {
  const { t } = useTranslation()
  const { info } = useSelector((state) => state.user)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()

  const onSuccessDialogClose = () => {
    setSuccess(false)
  }
  const onErrorDialogClose = () => {
    setError(false)
  }

  const formik = useFormik({
    initialValues: {
      name: info.name || "",
      surname: info.surname || "",
      phone: info.phone || "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async ({ name, surname, phone }) => {
      try {
        const res = await editUserInfo({ name, surname, phone })
        if (res.status === 200) {
          setSuccess(true)
          dispatch(setUserInfo(res.user))
        }
      } catch (e) {
        console.log(e)
        setError(true)
      }
    },
  })

  return (
    <>
      <Container sx={{ paddingTop: 1 }}>
        <Paper>
          <ListItem></ListItem>
          <Grid item container direction="row" xs={12} alignItems="center" gap={2}>
            <UserAvatar user={info} />
            <Typography variant="body1">{getUserFullName(info)}</Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit} id="editForm" className={classes.form}>
            <Stack sx={{ margin: "auto", marginTop: 5 }} spacing={4}>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Name")}</Typography>
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
                  <Typography variant="caption">{t("Surname")}</Typography>
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
              {/*<Grid item>*/}
              {/*  <Typography variant="caption" fontWeight="bold">*/}
              {/*    Personal Information*/}
              {/*  </Typography>*/}
              {/*  <Grid item>*/}
              {/*    <Typography variant="caption">*/}
              {/*      {*/}
              {/*        "Provide your personal information. This won't be a part of your public profile."*/}
              {/*      }*/}
              {/*    </Typography>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
              >
                <Grid item xs={5} className={classes.label}>
                  <Typography variant="caption">{t("Email")}</Typography>
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
                  <Typography variant="caption">{t("Phone")}</Typography>
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
              <Grid item xs={12} sx={{ textAlign: "start" }}>
                <GreenButton type="submit" size="small">
                  {t("Save_Changes")}
                </GreenButton>
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
