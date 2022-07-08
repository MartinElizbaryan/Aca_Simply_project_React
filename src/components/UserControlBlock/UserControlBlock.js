import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Badge, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
import LogoutIcon from "@mui/icons-material/Logout"
import PersonIcon from "@mui/icons-material/Person"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { TransparentButton } from "../Shared/Buttons/TransparentButton/TransparentButton"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { signOut } from "../Header/utils"
import { deleteUserInfo } from "../../redux/userSlice"
import { getUserInfo } from "../../redux/userSelectors"
import api from "../../api/api"
import socket from "../../helpers/socket"
import { useTranslation } from "react-i18next"

export default function UserControlBlock() {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const user = useSelector(getUserInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [messageCount, setMessageCount] = useState([])

  useEffect(() => {
    ;(async () => {
      const messagesInfo = await api.get("/messages/unread")
      setMessageCount(messagesInfo.data._count.id)
    })()
  }, [])

  useEffect(() => {
    socket.on("messageCountUpdate", async () => {
      const messagesInfo = await api.get("/messages/unread")
      setMessageCount(messagesInfo.data._count.id)
    })
  }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSignOutClick = async () => {
    setAnchorEl(null)
    const status = await signOut()
    if (status === 204) {
      dispatch(deleteUserInfo())
      // socket.emit("disconnect")
      socket.disconnect()
      navigate("/signin")
    }
  }

  const handleProfileClick = () => {
    setAnchorEl(null)
    navigate("/profile")
  }

  return (
    <>
      <Link
        url="/chat"
        content={
          <TransparentButton>
            <Badge badgeContent={messageCount} color="primary">
              <MailIcon />
            </Badge>
          </TransparentButton>
        }
        color="white"
        sx={{ display: "flex" }}
      />
      {/*{messageCount}*/}
      <TransparentButton onClick={handleMenu}>
        <AccountCircle />
        <Typography ml={2}>{user.name}</Typography>
      </TransparentButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
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
    </>
  )
}
