import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import { SuccessAlert } from "../Shared/Alerts/SuccessAlert/SuccessAlert"
import { ErrorAlert } from "../Shared/Alerts/ErrorAlert/ErrorAlert"
import UnlabeledInput from "../Shared/Inputs/UnlabeledInput/UnlabeledInput"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { editUserInfo } from "./utils"
import { getUserFullName } from "../../helpers/utils"
import { validationSchema } from "./vaildation"
import { setUserInfo } from "../../redux/userSlice"
import useStyles from "./styles"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"

export default function Profile() {
  const { info } = useSelector((state) => state.user)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()

  const onSuccessAlertClose = () => {
    setSuccess(false)
  }
  const onErrorAlertClose = () => {
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
    <Grid container spacing={0} mt={10}>
      <Grid
        item
        xs={12}
        md={3}
        mt={11}
        sx={{
          padding: 2,
        }}
      >
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
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        sx={{
          marginTop: {
            xs: 0,
            md: 6,
          },
        }}
      >
        <Paper elevation={4} sx={{ padding: 5 }}>
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
                  <Typography variant="caption">Name</Typography>
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
                  <Typography variant="caption">Surname</Typography>
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
                  <Typography variant="caption">Email</Typography>
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
                  <Typography variant="caption">Phone</Typography>
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
                <GreenButton type="submit">Save Changes</GreenButton>
              </Grid>
              {success && (
                <SuccessAlert
                  message={"Your info has been updated!"}
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
