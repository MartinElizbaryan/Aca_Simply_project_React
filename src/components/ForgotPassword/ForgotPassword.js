import { useState } from "react"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material"
import useStyles from "./styles"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { forgotPasswordRequest, sixDigitRequest, changePassword } from "./utils"

export default function ForgotPassword() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [openEmailInput, setOpenEmailInput] = useState(true)
  const [openCodeInput, setOpenCodeInput] = useState(false)
  const [openNewPasswordInput, setOpenNewPasswordInput] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [email, setEmail] = useState("")
  const [sixDigit, setSixDigit] = useState("")
  const [errMessage, setErrMessage] = useState("")

  const pattern = /^[0-9]+$/

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const emailValidation = (email) => {
    if (email === "") {
      setErrMessage("It should not be able")
      return false
    }
  }

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <Box className={classes.central}>
        <Typography className={classes.bigText}>Forgot Password</Typography>
      </Box>
      {!openCodeInput && openEmailInput && (
        <Box>
          <Box className={classes.central}>
            <Typography className={classes.text1}>
              No Problem! Enter your email below and we will send you an email with instruction to
              reset your password.
            </Typography>
            <InputField
              account={true}
              placeholder={"Your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box className={classes.central2}>
            <Button
              variant="contained"
              color="success"
              onClick={async () => {
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
              }}
            >
              Send Code
            </Button>
            <Box className={classes.central3}>
              <Typography className={classes.text1}>
                Back to{" "}
                <Link href="signin" underline="none">
                  {"Login"}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      {open && (
        <Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              {"Incorrect email or password"}
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
          <Typography className={classes.text1}>
            {"Please write the 6 digit number that we've sent to your email"}
          </Typography>
          <InputField
            sixDigitIcon={true}
            placeholder={"6 digit number"}
            value={sixDigit}
            onChange={(e) => setSixDigit(e.target.value)}
          />
          <Box className={`${classes.central2} ${classes.margin}`}>
            <Button
              variant="contained"
              color="success"
              onClick={async () => {
                try {
                  const data = await sixDigitRequest({ code: sixDigit })
                  setOpenCodeInput(false)
                  setOpenNewPasswordInput(true)
                  setOpenEmailInput(false)
                  setOpen(false)
                } catch (e) {
                  if (pattern.test(sixDigit)) {
                    setErrMessage(e.response.data.details)
                    setOpenNewPasswordInput(false)
                    setOpen(true)
                  } else {
                    setErrMessage("six digit number need to consist only of numbers")
                    setOpenNewPasswordInput(false)
                    setOpen(true)
                    console.log(e)
                  }
                }
              }}
            >
              One More Step
            </Button>
          </Box>
        </Box>
      )}
      {openNewPasswordInput && (
        <Box className={classes.central4}>
          <Typography className={classes.text1}>{"Now you can write new password"}</Typography>
          <InputField
            password={true}
            placeholder={"Write new password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Box className={`${classes.central2} ${classes.margin}`}>
            <Button
              variant="contained"
              color="success"
              onClick={async () => {
                try {
                  const data = await changePassword({
                    code: sixDigit,
                    password: newPassword,
                    confirmPassword: newPassword,
                  })
                  navigate("/signin")
                  setOpen(false)
                } catch (e) {
                  setErrMessage(e.response.data.details)
                  setOpen(true)
                  console.log(e)
                }
              }}
            >
              Done
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
