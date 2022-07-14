import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  SwipeableDrawer,
  Typography,
} from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import PersonIcon from "@mui/icons-material/Person"
import WidgetsIcon from "@mui/icons-material/Widgets"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { CustomLink as Link } from "../Links/CustomLink/CustomLink"
import { TransparentButton } from "../Buttons/TransparentButton/TransparentButton"
import { navlist } from "../../Header/constants"
// import socket from "../../../helpers/socket"
import { signOut } from "../../Header/utils"
import { getUserAuth, getUserInfo } from "../../../redux/userSelectors"
import { deleteUserInfo } from "../../../redux/userSlice"
import { colors } from "../../../constants/styles.js"

export default function NavigationMobile() {
  const [open, setOpen] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(getUserInfo)
  const auth = useSelector(getUserAuth)

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  const toggleOpenProfile = () => {
    setOpenProfile(!openProfile)
  }

  const handleSignOutClick = async () => {
    const status = await signOut()
    if (status === 204) {
      dispatch(deleteUserInfo())
      // socket.removeAllListeners()
      // socket.disconnect()
      toggleDrawer(false)()
      navigate("/signin")
    }
  }

  const handleMyProfileClick = () => {
    toggleDrawer(false)()
    navigate("/profile")
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
              <>
                <ListItemButton sx={{ padding: 2 }} onClick={toggleOpenProfile}>
                  <AccountCircle />
                  <Typography ml={2}>{user.name}</Typography>
                </ListItemButton>
                <Collapse in={openProfile} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ padding: 2, paddingLeft: 4 }}
                      onClick={handleMyProfileClick}
                    >
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      {t("My_Profile")}
                    </ListItemButton>
                    <ListItemButton
                      sx={{ padding: 2, paddingLeft: 4 }}
                      onClick={handleSignOutClick}
                    >
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      {t("Sign_Out")}
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            )}

            {navlist?.map((link, index) => {
              return (
                <Link
                  onClick={toggleDrawer(false)}
                  url={link.route}
                  content={<ListItemButton sx={{ padding: 2 }}>{link.name}</ListItemButton>}
                  color={colors.dark}
                  key={index}
                />
              )
            })}
          </List>
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}
