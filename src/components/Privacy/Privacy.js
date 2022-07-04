import { useLocation } from "react-router-dom"
import { Box, Typography, Link } from "@mui/material"
import ForgotPassword from "../ForgotPassword/ForgotPassword"
import { CustomLink } from "../Shared/CustomLink/CustomLink"
import { Logo } from "../Shared/Logo/Logo"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import useStyles from "./styles"

export default function Privacy() {
  const classes = useStyles()

  return (
    <Box className={classes.flexible}>
      <Typography className={classes.bigText}>{"Post what you've lost and find it. "}</Typography>

      <Typography className={classes.policyText}>By signing up you agree to our</Typography>
    </Box>
  )
}
