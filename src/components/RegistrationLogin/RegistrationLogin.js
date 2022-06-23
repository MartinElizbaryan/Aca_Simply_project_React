import { useState } from "react"
import { Box, Typography } from "@mui/material"
import { Logo } from "../Shared/Logo/Logo"
import { CustomLink } from "../Shared/CustomLink/CustomLink"
import useStyles from "./styles"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import { useLocation } from "react-router-dom"
import ForgotPassword from "../ForgotPassword/ForgotPassword"

export default function RegistrationLogin() {
  const { pathname } = useLocation()

  const classes = useStyles()

  return (
    <Box className={classes.flexible}>
      <Box className={classes.bgColor}>
        <Logo black={true} />
      </Box>
      <Typography className={classes.text1}>{"Post what you've lost and find it. "}</Typography>

      <Box className={classes.totalBox}>
        {!(pathname === "/forgot_password") && (
          <Box className={classes.spacing}>
            <Box className={classes.button}>
              <CustomLink url="/signup" title="Sign Up" color="black" />
            </Box>
            <Box className={classes.button}>
              <CustomLink url="/signin" title="Sign In" color="black" />
            </Box>
          </Box>
        )}
        <Box>
          {pathname === "/signin" && <SignIn />}
          {pathname === "/signup" && <SignUp />}
          {pathname === "/forgot_password" && <ForgotPassword />}
        </Box>
      </Box>

      <Typography className={classes.policyText}>
        By signing up you agree to our Terms of Service and Privacy Policy
      </Typography>
    </Box>
  )
}
