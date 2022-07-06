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
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { signIn } from "./utils"
import { useFormik } from "formik"
import { setUserInfo } from "../../redux/userSlice"
import { validationSchema } from "./validation"
import useStyles from "./styles"

export default function SignIn() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [errMessage, setErrMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const data = await signIn({ email, password })
        dispatch(setUserInfo(data.user))
        navigate("/profile")
        setOpen(false)
      } catch (e) {
        setOpen(true)
        setErrMessage(e.response.data.details)
        console.log(e)
      }
    },
  })

  const classes = useStyles()
  return (
    <Box className={classes.totalBox}>
      <form onSubmit={formik.handleSubmit} id="myForm">
        <Box className={classes.central}>
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
          <InputField
            eye
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            password
            placeholder={"Your password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
      </form>
      <Box className={classes.finalBox}>
        <Link url="/forgot-password" content="Forgot your password?" />
      </Box>
      <Box className={classes.central2}>
        <Button variant="contained" color="success" type="submit" form="myForm">
          Log in
        </Button>
      </Box>
      {open && (
        <Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              {"Something went wrong. Failed to sign in"}
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
