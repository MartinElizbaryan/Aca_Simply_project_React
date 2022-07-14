import React, { lazy, Suspense } from "react"
import { useSelector } from "react-redux"
import { AppBar, Box, Stack, Toolbar } from "@mui/material"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import NavigationMobile from "../Shared/NavigationMobile/NavigationMobile"
import { Logo } from "../Shared/Logo/Logo"
import { navlist } from "./constants"
import { getUserAuth } from "../../redux/userSelectors"
import { colors } from "../../constants/styles.js"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import SignInButton from "../Shared/Buttons/SignInButton/SignInButton"

const UserControlBlock = lazy(() => import("../UserControlBlock/UserControlBlock"))

export default function Header() {
  const { t } = useTranslation()
  const classes = useStyles()
  const auth = useSelector(getUserAuth)

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Logo />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          {navlist?.map((link, index) => {
            return (
              <Link url={link.route} color={colors.white} key={link.name} content={t(link.name)} />
            )
          })}
        </Stack>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <NavigationMobile />
        </Box>
        <Box display="flex" alignItems="center">
          {!auth ? (
            <SignInButton />
          ) : (
            <Suspense fallback={<div></div>}>
              <UserControlBlock />
            </Suspense>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
