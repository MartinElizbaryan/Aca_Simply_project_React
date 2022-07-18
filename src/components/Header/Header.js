import React, { lazy, Suspense } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { AppBar, Box, Stack, Toolbar, useTheme } from "@mui/material"
import { Logo } from "../Shared/Logo/Logo"
import NavigationMobile from "../Shared/NavigationMobile/NavigationMobile"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import SignInButton from "../Shared/Buttons/SignInButton/SignInButton"
import { getUserAuth } from "../../redux/user/userSelectors"
import { navlist } from "./constants"
import { colors } from "../../constants/styles.js"
import useStyles from "./styles"

const UserControlBlock = lazy(() => import("../UserControlBlock/UserControlBlock"))

export default function Header() {
  const { t } = useTranslation()
  const auth = useSelector(getUserAuth)
  const classes = useStyles()
  const theme = useTheme()

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      sx={{
        backgroundColor: theme.palette.blurBlue.blur,
      }}
    >
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
              <Link url={link.route} color={colors.white} key={link.name}>
                {t(link.name)}
              </Link>
            )
          })}
        </Stack>
        <Box display="flex" alignItems="center">
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
          {!auth ? (
            <SignInButton />
          ) : (
            <>
              <Suspense fallback={<div></div>}>
                <UserControlBlock />
              </Suspense>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
