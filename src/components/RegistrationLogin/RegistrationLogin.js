import { useState } from "react"
import { Box, Typography } from "@mui/material"
import { Logo } from "../Shared/Logo/Logo"
import { CustomLink } from "../Shared/CustomLink/CustomLink"
import useStyles from "./styles"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"

export default function RegistrationLogin() {
  const [route, setRoute] = useState("signIn")

  const handleSignUpClick = () => {
    setRoute("signUp")
  }
  const handleSignInClick = () => {
    setRoute("signIn")
  }

  const classes = useStyles()

  return (
    <Box className={classes.flexible}>
      <Box className={classes.bgColor}>
        <Logo black={true} />
      </Box>
      <Typography className={classes.text1}>Post what you've lost and find it. </Typography>

      <Box className={classes.totalBox}>
        <Box className={classes.spacing}>
          <Box className={classes.button}>
            <CustomLink url="/signup" title="Sign Up" color="black" onClick={handleSignUpClick} />
          </Box>
          <Box className={classes.button}>
            <CustomLink url="/signin" title="Sign In" color="black" onClick={handleSignInClick} />
          </Box>
        </Box>
        <Box>
          {route === "signIn" && <SignIn />}
          {route === "signUp" && <SignUp />}
        </Box>
      </Box>

      <Typography className={classes.policyText}>
        By signing up you agree to our Terms of Service and Privacy Policy
      </Typography>
    </Box>
  )
}
