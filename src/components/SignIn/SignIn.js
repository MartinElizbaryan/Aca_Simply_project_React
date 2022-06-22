import { useState } from "react"
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Link,
} from "@mui/material"
import { InputField } from "../Shared/InputField/InputField"
import { signIn } from "./utils"
import { colors } from "../../constants/styles"
import useStyles from "./styles"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useState(false)
  const [errMessage, setErrMessage] = useState("")

  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <Box className={classes.centeral}>
        <InputField
          account={true}
          placeholder={"Your email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          password={true}
          placeholder={"Your password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box className={classes.finalBox}>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember me"
          style={{ color: colors.dark }}
        />
        <Link href="#" underline="none">
          {"Forgot your password?"}
        </Link>
      </Box>
      <Box className={classes.centeral2}>
        <Button
          variant="contained"
          color="success"
          onClick={async () => {
            try {
              const data = await signIn({ email, password })
              localStorage.setItem("auth", data.auth)
              setAuth(true)
              navigate("/cabinet/profile")
              setOpen(false)
              // someFunction(auth)
            } catch (e) {
              localStorage.setItem("auth", false)
              setAuth(false)
              setOpen(true)
              setErrMessage(e.response.data.details)
              console.log(e)
              // someFunction(false)
            }
          }}
        >
          Log in
        </Button>
      </Box>
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
    </Box>
  )
}
