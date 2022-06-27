import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { signInFunction } from "./utils"
import { signIn } from "../../redux/userSlice"
import useStyles from "./styles"
import { InputField } from "../Shared/Inputs/InputField/InputField"

export default function SignIn() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMessage, setErrMessage] = useState("")

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <Box className={classes.central}>
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
        <Link url="/forgot-password" title="Forgot your password?" />
      </Box>
      <Box className={classes.central2}>
        <Button
          variant="contained"
          color="success"
          onClick={async () => {
            try {
              const data = await signInFunction({ email, password })
              dispatch(signIn(data.user))

              navigate("/cabinet/profile")
              setOpen(false)
            } catch (e) {
              setOpen(true)
              setErrMessage(e.response.data.details)
              console.log(e)
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
