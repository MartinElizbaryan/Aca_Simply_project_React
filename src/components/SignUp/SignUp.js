import { useState } from "react"
import { Box, Button } from "@mui/material"
import { signUp } from "./utils"
import useStyles from "./styles"
import { InputField } from "../Shared/Inputs/InputField/InputField"
import { useFormik } from "formik"
import * as yup from "yup"

export default function SignUp() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const classes = useStyles()

  return (
    <Box className={classes.totalBox}>
      <Box className={classes.central}>
        <InputField
          account
          placeholder={"Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          account
          placeholder={"Surname"}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <InputField
          email
          placeholder={"Your email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          password
          placeholder={"Your password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          confirmedPassword
          placeholder={"Confirm password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Box>
      <Box className={classes.central2}>
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            signUp({
              name,
              surname,
              email,
              password,
              confirmPassword,
            })
          }
        >
          Create An Account
        </Button>
      </Box>
    </Box>
  )
}
