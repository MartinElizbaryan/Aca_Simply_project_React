import { Collapse, List, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import AccountCircle from "@mui/icons-material/AccountCircle"
import PersonIcon from "@mui/icons-material/Person"
import LogoutIcon from "@mui/icons-material/Logout"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../Header/utils"
import { deleteUserInfo } from "../../../redux/userSlice"
import socket from "../../../helpers/socket"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

console.log("awdawd")

export default function NavigationMobileProfile({ user, toggleDrawer }) {
  const [openProfile, setOpenProfile] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOutClick = async () => {
    const status = await signOut()
    if (status === 204) {
      dispatch(deleteUserInfo())
      socket.removeAllListeners()
      socket.disconnect()
      toggleDrawer(false)()
      navigate("/signin")
    }
  }

  const toggleOpenProfile = () => {
    setOpenProfile(!openProfile)
  }

  const handleMyProfileClick = () => {
    toggleDrawer(false)()
    navigate("/profile")
  }

  return (
    <>
      <ListItemButton sx={{ padding: 2 }} onClick={toggleOpenProfile}>
        <AccountCircle />
        <Typography ml={2}>{user.name}</Typography>
      </ListItemButton>
      <Collapse in={openProfile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ padding: 2, paddingLeft: 4 }} onClick={handleMyProfileClick}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            {t("My_Profile")}
          </ListItemButton>
          <ListItemButton sx={{ padding: 2, paddingLeft: 4 }} onClick={handleSignOutClick}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            {t("Sign_Out")}
          </ListItemButton>
        </List>
      </Collapse>
    </>
  )
}
