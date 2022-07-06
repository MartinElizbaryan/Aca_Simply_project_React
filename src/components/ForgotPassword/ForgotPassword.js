import { useState } from "react"
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
import useStyles from "./styles"
import { useNavigate } from "react-router-dom"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { changePassword, forgotPasswordRequest, sixDigitRequest } from "./utils"
import { useFormik } from "formik"
import { validationSchema, validationSchemaCode, validationSchemaNewPassword } from "./validation"
import { CustomLink } from "../Shared/CustomLink/CustomLink"

export default function ForgotPassword() {
  const [open, setOpen] = useState(false)
  const [openEmailInput, setOpenEmailInput] = useState(true)
  const [openCodeInput, setOpenCodeInput] = useState(false)
  const [openNewPasswordInput, setOpenNewPasswordInput] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [errMessage, setErrMessage] = useState("")

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email }) => {
      try {
        const status = await forgotPasswordRequest({ email })
        setOpenCodeInput(true)
        setOpen(false)
      } catch (e) {
        setOpen(true)
        setOpenCodeInput(false)
        setErrMessage(e.response.data.details)
        console.log(e)
      }
    },
  })

  const formikCode = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchemaCode,
    onSubmit: async ({ code }) => {
      try {
        const data = await sixDigitRequest({ code })
        setOpenCodeInput(false)
        setOpenNewPasswordInput(true)
        setOpenEmailInput(false)
        setOpen(false)
      } catch (e) {
        setErrMessage(e.response.data.details)
        setOpenNewPasswordInput(false)
        setOpen(true)
      }
    },
  })

  const formikNewPassword = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaNewPassword,
    onSubmit: async ({ password, confirmPassword }) => {
      try {
        const data = await changePassword({
          code: formikCode.values.code,
          password: password,
          confirmPassword: confirmPassword,
        })
        navigate("/signin")
        setOpen(false)
      } catch (e) {
        setErrMessage(e.response.data.details)
        setOpen(true)
      }
    },
  })

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <Box className={classes.central}>
        <Typography className={classes.bigText}>Forgot Password</Typography>
      </Box>
      {!openCodeInput && openEmailInput && (
        <Box>
          <Box className={classes.central}>
            <form onSubmit={formik.handleSubmit} id="forgotPass">
              <Typography className={classes.text1}>
                No Problem! Enter your email below and we will send you an email with instruction to
                reset your password.
              </Typography>
              <InputField
                account
                placeholder={"Your email"}
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
            <Button variant="contained" color="success" type="submit" form="forgotPass">
              Send Code
            </Button>
            <Box className={classes.central3}>
              <Typography className={classes.text1}>
                Back to
                <CustomLink url="/signin" content=" Sign In" />
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
                Your {errMessage}. <br />
                Please try again.
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleClose} autoFocus>
                Okay
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
            <Button variant="contained" color="success" type="submit" form="codeScreen">
              One More Step
            </Button>
          </Box>
        </Box>
      )}
      {openNewPasswordInput && (
        <Box className={classes.central}>
          <form
            onSubmit={formikNewPassword.handleSubmit}
            id="newPassword"
            className={classes.central6}
          >
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
            <Button variant="contained" color="success" type="submit" form="newPassword">
              Done
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
