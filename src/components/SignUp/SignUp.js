import { useState } from "react"
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
import { signUp } from "./utils"
import useStyles from "./styles"
import { useNavigate } from "react-router-dom"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { useFormik } from "formik"
import { validationSchema } from "./validation"
import { useTranslation } from "react-i18next"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"

export default function SignUp() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [errMessage, setErrMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ name, surname, email, password, confirmPassword }) => {
      try {
        const data = await signUp({
          name,
          surname,
          email,
          password,
          confirmPassword,
        })
        navigate("/signin")
        setOpen(false)
      } catch (e) {
        setOpen(true)
        setErrMessage(t(e.response.data.details))
        console.log(e)
      }
    },
  })

  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Box
      className={classes.totalBox}
      sx={{
        backgroundColor: theme.palette.greyBg,
      }}
    >
      <form onSubmit={formik.handleSubmit} id="signinButton">
        <Box className={classes.central}>
          <InputField
            account
            placeholder={t("Name")}
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            type="text"
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <InputField
            account
            placeholder={t("Surname")}
            value={formik.values.surname}
            onChange={formik.handleChange}
            name="surname"
            type="text"
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
          <InputField
            email
            placeholder={t("Your_email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            type="text"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputField
            password
            eye
            setIsVisible={setIsVisible2}
            isVisible={isVisible2}
            placeholder={t("Your_password")}
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <InputField
            confirmedPassword
            eye
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            placeholder={t("Confirm_password")}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            name="confirmPassword"
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </Box>
      </form>
      <Box className={classes.central2}>
        <GreenButton variant="contained" type="submit" form="signinButton">
          {t("Create_An_Account")}
        </GreenButton>
      </Box>
      {open && (
        <Box>
          <Dialog
            open={open}
            onClose={() => {
              setOpen(false)
            }}
          >
            <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
              {t("SomethingWSignUp")}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" style={{ textAlign: "center" }}>
                {t("Your")} {errMessage} <br />
                {t("Pls_Try_Again")}
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => {
                  setOpen(false)
                }}
                autoFocus
              >
                {t("Okay")}
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </Box>
  )
}
