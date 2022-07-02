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
import useStyles from "./styles"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { useFormik } from "formik"
import * as yup from "yup"
import { setUserInfo } from "../../redux/userSlice"
import { signIn } from "./utils"

export default function SignIn() {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [errMessage, setErrMessage] = useState("")

  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .max(15, "Password should be of maximum 15 characters length")
      .matches(/^[a-zA-Z0-9]+$/, "Password should contain only numbers and letters")
      .required("Password is required"),
  })

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
            account={true}
            placeholder={"Your email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputField
            password={true}
            placeholder={"Your password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
      </form>
      <Box className={classes.finalBox}>
        <Link url="/forgot-password" content="Forgot your password?" />
      </Box>
      <Box className={classes.central2}>
        <Button
          variant="contained"
          color="success"
          type="submit"
          form="myForm"
          onClick={async () => {
            /* try {
              const data = await signInFunction({ formik.values.email, password })
              dispatch(signIn(data.user))
              navigate("/profile")
              //setOpen(false)
            } catch (e) {
              //setOpen(true)
              //setErrMessage(e.response.data.details)
              console.log(e)
            } */
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
