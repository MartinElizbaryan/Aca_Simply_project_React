import { lazy, Suspense, useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { Box, List, ListItemButton, SwipeableDrawer, useTheme } from "@mui/material"
import WidgetsIcon from "@mui/icons-material/Widgets"
import { CustomLink as Link } from "../../Links/CustomLink/CustomLink"
import { TransparentButton } from "../../Buttons/TransparentButton/TransparentButton"
import { getUserAuth, getUserInfo } from "../../../../redux/user/userSelectors"
import { navlist } from "../../../Header/constants"

const NavigationMobileProfile = lazy(() =>
  import("../NavigationMobileProfile/NavigationMobileProfile")
)

export default function NavigationMobile() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const user = useSelector(getUserInfo)
  const auth = useSelector(getUserAuth)
  const theme = useTheme()

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <Box>
      <TransparentButton onClick={toggleDrawer(true)}>
        <WidgetsIcon />
      </TransparentButton>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: 200 }} role="presentation">
          <List component="div" disablePadding>
            {auth && (
              <Suspense fallback={<div></div>}>
                <NavigationMobileProfile user={user} toggleDrawer={toggleDrawer} />
              </Suspense>
            )}

            {navlist?.map((link, index) => {
              return (
                <Link
                  onClick={toggleDrawer(false)}
                  url={link.route}
                  color={theme.palette.mainColor}
                  key={index}
                >
                  <ListItemButton sx={{ padding: 2 }}>{t(link.name)}</ListItemButton>
                </Link>
              )
            })}
          </List>
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}
