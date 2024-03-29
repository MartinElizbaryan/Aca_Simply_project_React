import { TransparentButton } from "../TransparentButton/TransparentButton"
import LoginIcon from "@mui/icons-material/Login"
import { Typography } from "@mui/material"
import { CustomLink as Link } from "../../Links/CustomLink/CustomLink"
import { useTranslation } from "react-i18next"

const SignInButton = () => {
  const { t } = useTranslation()

  return (
    <Link url="/signin" color="white">
      <TransparentButton>
        <LoginIcon />
        <Typography ml={2}>{t("Sign_In")}</Typography>
      </TransparentButton>
    </Link>
  )
}

export default SignInButton
