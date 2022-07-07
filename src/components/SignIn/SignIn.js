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
import { validationSchema } from "./validation"
import { useTranslation } from "react-i18next"

export default function SignIn() {
  const { t } = useTranslation()
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
        console.log(data)
        dispatch(setUserInfo(data.user))
        navigate("/profile")
        setOpen(false)
      } catch (e) {
        console.log(e)
        setOpen(true)
        setErrMessage(e.response.data.details)
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
        <Link url="/forgot-password" content={t("Forgot_pass")} />
      </Box>
      <Box className={classes.central2}>
        <Button variant="contained" color="success" type="submit" form="myForm">
          {t("Log_in")}
        </Button>
      </Box>
      {open && (
        <Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              {t("SomethingWW")}
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
    </Box>
  )
}
