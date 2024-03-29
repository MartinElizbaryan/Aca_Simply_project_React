import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from "@mui/material"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { validationSchema } from "./validation"
import useStyles from "./styles"
import useLazyFetch from "../../hooks/useLazyFetch"
import { setUserInfo } from "../../redux/user/userSlice"
import connectToSocket from "../../helpers/connectToSocket"

export default function SignIn() {
  const [open, setOpen] = useState(false)
  const [errMessage, setErrMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const { data, error, apiRequest } = useLazyFetch()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme()

  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (data.auth) {
      localStorage.setItem("accessToken", data.accessToken)
      dispatch(setUserInfo(data.user))
      connectToSocket(data.user.id)
      navigate("/profile")
    } else if (error) {
      setOpen(true)
      setErrMessage(t(error.response.data.details))
    }
  }, [data, error])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }) => {
      const res = await apiRequest("/auth/sign-in", "post", { email, password })
    },
  })

  return (
    <Box
      className={classes.totalBox}
      sx={{
        backgroundColor: theme.palette.greyBg,
      }}
    >
      <form onSubmit={formik.handleSubmit} id="myForm">
        <Box className={classes.central}>
          <InputField
            account
            placeholder={t("Your_email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            type="text"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputField
            eye
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            password
            placeholder={t("Your_password")}
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
      </form>
      <Box className={classes.finalBox}>
        <Link url="/forgot-password">{t("Forgot_pass")}</Link>
      </Box>
      <Box className={classes.central2}>
        <BlueButton variant="contained" type="submit" form="myForm">
          {t("Sign_In")}
        </BlueButton>
      </Box>
      {open && (
        <Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              {t("SomethingWW")}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" style={{ textAlign: "center" }}>
                {t("Your")} {errMessage} <br />
                {t("Pls_Try_Again")}
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleClose} autoFocus>
                {t("Okay")}
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </Box>
  )
}
