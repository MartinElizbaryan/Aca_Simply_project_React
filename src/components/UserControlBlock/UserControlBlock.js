import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Badge, Box, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
import LogoutIcon from "@mui/icons-material/Logout"
import PersonIcon from "@mui/icons-material/Person"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { TransparentButton } from "../Shared/Buttons/TransparentButton/TransparentButton"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { signOut } from "../Header/utils"
import { deleteUserInfo } from "../../redux/userSlice"
import { getUserInfo } from "../../redux/userSelectors"
import api from "../../api/api"
import socket from "../../helpers/socket"
import { Notifications as NotificationsIcon, NotificationsActive } from "@mui/icons-material"
import { Notifications } from "../Notifications/Notifications"
import { useTranslation } from "react-i18next"
import CreatePost from "../CreatePost/CreatePost"
import { authHOC } from "../../hocs/authHOC"

const UserControlBlock = () => {
  const { t } = useTranslation()
  const [openCreatePost, setOpenCreatePost] = useState(false)
  const [profileAnchorEl, setProfileAnchorEl] = useState(null)
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null)
  const user = useSelector(getUserInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [messageCount, setMessageCount] = useState([])
  const [notificationsCount, setNotificationsCount] = useState([])

  useEffect(() => {
    ;(async () => {
      const messagesInfo = await api.get("/messages/unread")
      setMessageCount(messagesInfo.data._count.id)
      const notificationsInfo = await api.get("/notifications/unread")
      setNotificationsCount(notificationsInfo.data.count)
    })()
  }, [])

  useEffect(() => {
    socket.on("messageCountUpdate", async () => {
      const messagesInfo = await api.get("/messages/unread")
      setMessageCount(messagesInfo.data._count.id)
    })
    socket.on("receiveNotification", ({ count }) => {
      setNotificationsCount(count)
    })
  }, [])

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null)
  }

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null)
  }

  const handleProfileMenu = (e) => {
    setProfileAnchorEl(e.currentTarget)
  }

  const handleSignOutClick = async () => {
    setProfileAnchorEl(null)
    const status = await signOut()
    if (status === 204) {
      dispatch(deleteUserInfo())
      socket.removeAllListeners()
      socket.disconnect()
      navigate("/signin")
    }
  }

  const handleProfileClick = () => {
    setProfileAnchorEl(null)
    navigate("/profile")
  }

  const handleNotificationClick = (e) => {
    setNotificationAnchorEl(e.currentTarget)
  }

  const toggleOpenCreatePost = (open) => {
    setOpenCreatePost(open)
  }

  return (
    <>
      <TransparentButton onClick={() => toggleOpenCreatePost(true)}>
        <AddCircleIcon />
      </TransparentButton>
      <CreatePost open={openCreatePost} toggleOpen={toggleOpenCreatePost} />
      <TransparentButton onClick={handleNotificationClick}>
        <Badge badgeContent={notificationsCount} color="primary">
          {notificationsCount ? <NotificationsActive /> : <NotificationsIcon />}
        </Badge>
      </TransparentButton>
      <Notifications
        open={Boolean(notificationAnchorEl)}
        anchorEl={notificationAnchorEl}
        handleNotificationClose={handleNotificationClose}
        changeNotificationsCount={setNotificationsCount}
      />
      <Link
        url="/chat"
        content={
          <TransparentButton>
            <Badge badgeContent={messageCount} color="primary">
              <MailIcon />
            </Badge>
          </TransparentButton>
        }
        color="inherit"
        sx={{ display: "flex" }}
      />
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <TransparentButton onClick={handleProfileMenu}>
          <AccountCircle />
          <Typography ml={2}>{user.name}</Typography>
        </TransparentButton>
        <Menu
          anchorEl={profileAnchorEl}
          open={Boolean(profileAnchorEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileClick}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            {t("My_Profile")}
          </MenuItem>
          <MenuItem onClick={handleSignOutClick}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            {t("Sign_Out")}
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}

export default authHOC(UserControlBlock)
