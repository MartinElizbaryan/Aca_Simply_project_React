import { useLocation } from "react-router-dom"
import { Box, Link, Typography } from "@mui/material"
import ForgotPassword from "../ForgotPassword/ForgotPassword"
import { CustomLink } from "../Shared/Links/CustomLink/CustomLink"
import { Logo } from "../Shared/Logo/Logo"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"

export default function RegistrationLogin() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const classes = useStyles()

  return (
    <Box className={classes.flexible}>
      <Box className={classes.bgColor}>
        <Logo black={true} />
      </Box>
      <Typography className={classes.text1}>{t("sign_in_header")}</Typography>

      <Box className={classes.totalBox}>
        {!(pathname === "/forgot-password") && (
          <Box className={classes.spacing}>
            <CustomLink
              url="/signup"
              content={<Box className={classes.button}>{t("Sign_Up")}</Box>}
              bgcolor={pathname === "/signup" ? "white" : "#F3F7F7"}
              className={`${classes.linkBox} ${classes.borderRadius1}`}
            />
            <CustomLink
              url="/signin"
              content={<Box className={classes.button}>{t("Sign_In")}</Box>}
              bgcolor={pathname === "/signin" ? "white" : "#F3F7F7"}
              className={`${classes.linkBox} ${classes.borderRadius2}`}
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
        {t("By_signing")}
        <Link href="terms-conditions" underline="none" target="_blank">
          {t("withTerms")}
        </Link>{" "}
        {t("and")}
        <Link href="privacy" underline="none" target="_blank">
          {t("withPrivacy")}
        </Link>
      </Typography>
    </Box>
  )
}
