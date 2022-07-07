import React, { lazy, Suspense } from "react"
import { useSelector } from "react-redux"
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import { TransparentButton } from "../Shared/Buttons/TransparentButton/TransparentButton"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import NavigationMobile from "../Shared/Navigation/NavigationMobile"
import { Logo } from "../Shared/Logo/Logo"
import { navlist } from "./constants"
import { getUserAuth } from "../../redux/userSelectors"
import { colors } from "../../constants/styles.js"
import useStyles from "./styles"

const UserControlBlock = lazy(() => import("../UserControlBlock/UserControlBlock"))

export default function Header() {
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
          {navlist?.map((item, index) => {
            return (
              <Link url={item.route} color={colors.white} key={item.name} content={item.name} />
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
            <Link
              url="/signin"
              content={
                <TransparentButton>
                  <LoginIcon />
                  <Typography ml={2}>Sign In</Typography>
                </TransparentButton>
              }
              color="white"
            />
          ) : (
            <Suspense fallback={<div>Loading</div>}>
              <UserControlBlock />
            </Suspense>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
