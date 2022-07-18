import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Box, Typography, useTheme } from "@mui/material"
import { Logo } from "../Shared/Logo/Logo"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import ForgotPassword from "../ForgotPassword/ForgotPassword"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import useStyles from "./styles"
import { getThemeMode } from "../../redux/theme/themeSelectors"
import { useSelector } from "react-redux"

const RegistrationLogin = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const classes = useStyles()
  const theme = useTheme()
  const themeMode = useSelector(getThemeMode)
  return (
    <Box className={classes.flexible}>
      <Box className={classes.bgColor}>
        <Logo black={themeMode === "dark" ? false : true} />
      </Box>
      <Typography className={classes.text1} color={theme.palette.mainColor}>
        {t("sign_in_header")}
      </Typography>

      <Box
        className={classes.totalBox}
        sx={{
          backgroundColor: theme.palette.greyBg,
        }}
      >
        {!(pathname === "/forgot-password") && (
          <Box className={classes.spacing}>
            <Link
              url="/signup"
              bgcolor={pathname === "/signup" ? "white" : "#F3F7F7"}
              className={`${classes.linkBox} ${classes.borderRadius1}`}
            >
              <Box className={classes.button}>{t("Sign_Up")}</Box>
            </Link>
            <Link
              url="/signin"
              bgcolor={pathname === "/signin" ? "white" : "#F3F7F7"}
              className={`${classes.linkBox} ${classes.borderRadius2}`}
            >
              <Box className={classes.button}>{t("Sign_In")}</Box>
            </Link>
          </Box>
        )}
        <Box className={classes.otherBoxes}>
          {pathname === "/signin" && <SignIn />}
          {pathname === "/signup" && <SignUp />}
          {pathname === "/forgot-password" && <ForgotPassword />}
        </Box>
      </Box>

      <Typography className={classes.policyText} color={theme.palette.mainColor}>
        {t("By_signing")}
        <Link url="/terms">{t("withTerms")}</Link> {t("and")}
        <Link url="/privacy">{t("withPrivacy")}</Link>
      </Typography>
    </Box>
  )
}

export default RegistrationLogin
