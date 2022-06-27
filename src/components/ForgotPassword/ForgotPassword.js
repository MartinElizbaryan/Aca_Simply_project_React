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
//import { signInPost } from "./utils"
import useStyles from "./styles"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { InputField } from "../Shared/Inputs/InputField/InputField"
//import { signIn } from "../../helpers/userSlice"

export default function ForgotPassword() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [openCodeInput, setOpenCodeInput] = useState(false)
  const [email, setEmail] = useState("")
  const [sixDigit, setSixDigit] = useState(null)
  const [errMessage, setErrMessage] = useState("")

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <Box className={classes.central}>
        <Typography className={classes.bigText}>Forgot Password</Typography>
      </Box>
      {!openCodeInput && (
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
              onClick={() => {
                setOpenCodeInput(true)
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
              onClick={() => {
                navigate("/signin")
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
