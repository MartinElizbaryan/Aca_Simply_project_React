import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import useLazyFetch from "../../hooks/useLazyFetch"
import { validationSchema, validationSchemaCode, validationSchemaNewPassword } from "./validation"
import useStyles from "./styles"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

export default function ForgotPassword() {
  const [open, setOpen] = useState(false)
  const [openEmailInput, setOpenEmailInput] = useState(true)
  const [openCodeInput, setOpenCodeInput] = useState(false)
  const [openNewPasswordInput, setOpenNewPasswordInput] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [errMessage, setErrMessage] = useState("")
  const {
    data: emailRequestData,
    error: emailRequestError,
    apiRequest: emailRequest,
  } = useLazyFetch()
  const { data: codeRequestData, error: codeRequestError, apiRequest: codeRequest } = useLazyFetch()
  const {
    data: passwordRequestData,
    error: passwordRequestError,
    apiRequest: passwordRequest,
  } = useLazyFetch()
  const { t } = useTranslation()

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (emailRequestData.status) {
      setOpenCodeInput(true)
      setOpen(false)
    } else if (emailRequestError) {
      setOpen(true)
      setOpenCodeInput(false)
      setErrMessage(emailRequestError.response.data.details)
    }
  }, [emailRequestData, emailRequestError])

  useEffect(() => {
    if (codeRequestData.status) {
      setOpenCodeInput(false)
      setOpenNewPasswordInput(true)
      setOpenEmailInput(false)
      setOpen(false)
    } else if (codeRequestError) {
      setErrMessage(codeRequestError.response.data.details)
      setOpenNewPasswordInput(false)
      setOpen(true)
    }
  }, [codeRequestData, codeRequestError])

  useEffect(() => {
    if (passwordRequestData.status) {
      navigate("/signin")
      setOpen(false)
    } else if (passwordRequestError) {
      setErrMessage(passwordRequestError.response.data.details)
      setOpen(true)
    }
  }, [passwordRequestData, passwordRequestError])

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email }) => {
      await emailRequest("/auth/forgot-password", "post", { email })
    },
  })

  const formikCode = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchemaCode,
    onSubmit: async ({ code }) => {
      await codeRequest("/auth/verify-code", "post", { code })
    },
  })

  const formikNewPassword = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaNewPassword,
    onSubmit: async ({ password, confirmPassword }) => {
      await passwordRequest("/auth/change-password", "post", {
        code: formikCode.values.code,
        password: password,
        confirmPassword: confirmPassword,
      })
    },
  })

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <Box className={classes.central}>
        <Typography className={classes.bigText}>{t("Forgot_Password")}</Typography>
      </Box>
      {!openCodeInput && openEmailInput && (
        <Box>
          <Box className={classes.central}>
            <form onSubmit={formik.handleSubmit} id="forgotPass">
              <Typography className={classes.text1}>{t("No_problem")}</Typography>
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
            </form>
          </Box>
          <Box className={classes.central2}>
            <BlueButton variant="contained" type="submit" form="forgotPass">
              {t("Send_Code")}
            </BlueButton>
            <Box className={classes.central3}>
              <Typography className={classes.text1}>
                {t("Back_to")}
                <Link url="/signin">{" Sign In"}</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      {open && (
        <Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              {"Something went wrong."}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" style={{ textAlign: "center" }}>
                {t("Your")} {errMessage}. <br />
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
      {openCodeInput && (
        <Box className={classes.central4}>
          <form onSubmit={formikCode.handleSubmit} id="codeScreen">
            <Typography className={classes.text1}>
              {"Please write the 6 digit number that we've sent to your email"}
            </Typography>
            <InputField
              sixDigitIcon
              placeholder={"6 digit number"}
              value={formikCode.values.code}
              onChange={formikCode.handleChange}
              name="code"
              type="text"
              error={formikCode.touched.code && Boolean(formikCode.errors.code)}
              helperText={formikCode.touched.code && formikCode.errors.code}
            />
          </form>
          <Box className={`${classes.central2} ${classes.margin}`}>
            <BlueButton variant="contained" type="submit" form="codeScreen">
              One More Step
            </BlueButton>
          </Box>
        </Box>
      )}
      {openNewPasswordInput && (
        <Box className={classes.central}>
          <form onSubmit={formikNewPassword.handleSubmit} id="newPassword">
            <Typography className={classes.text1}>{"Now you can write new password"}</Typography>
            <InputField
              password
              eye
              setIsVisible={setIsVisible2}
              isVisible={isVisible2}
              placeholder={"Write new password"}
              value={formikNewPassword.values.password}
              onChange={formikNewPassword.handleChange}
              name="password"
              error={
                formikNewPassword.touched.password && Boolean(formikNewPassword.errors.password)
              }
              helperText={formikNewPassword.touched.password && formikNewPassword.errors.password}
            />
            <InputField
              confirmedPassword
              eye
              setIsVisible={setIsVisible}
              isVisible={isVisible}
              placeholder={"Confirm password"}
              value={formikNewPassword.values.confirmPassword}
              onChange={formikNewPassword.handleChange}
              name="confirmPassword"
              error={
                formikNewPassword.touched.confirmPassword &&
                Boolean(formikNewPassword.errors.confirmPassword)
              }
              helperText={
                formikNewPassword.touched.confirmPassword &&
                formikNewPassword.errors.confirmPassword
              }
            />
          </form>
          <Box className={`${classes.central2} ${classes.margin}`}>
            <BlueButton variant="contained" type="submit" form="newPassword">
              Done
            </BlueButton>
          </Box>
        </Box>
      )}
    </Box>
  )
}
