import { useLocation } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import ForgotPassword from "../ForgotPassword/ForgotPassword"
import { CustomLink } from "../Shared/CustomLink/CustomLink"
import { Logo } from "../Shared/Logo/Logo"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import useStyles from "./styles"

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
        {!(pathname === "/forgot-password") && (
          <Box className={classes.spacing}>
            <CustomLink
              url="/signup"
              title={<Box className={classes.button}>Sign Up</Box>}
              bgcolor={pathname === "/signup" ? "#F3F7F7" : "white"}
              className={`${classes.linkBox} ${classes.borderRadiuses1}`}
            />
            <CustomLink
              url="/signin"
              title={<Box className={classes.button}>Sign In</Box>}
              bgcolor={pathname === "/signin" ? "#F3F7F7" : "white"}
              className={`${classes.linkBox} ${classes.borderRadiuses2}`}
            />
          </Box>
        )}
        <Box className={classes.otherBoxes}>
          {pathname === "/signin" && <SignIn />}
          {pathname === "/signup" && <SignUp />}
          {pathname === "/forgot-password" && <ForgotPassword />}
        </Box>
      </Box>

      <Typography className={classes.policyText}>
        By signing up you agree to our Terms of Service and Privacy Policy
      </Typography>
    </Box>
  )
}
