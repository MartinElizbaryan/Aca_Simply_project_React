import React, { useEffect, useState } from "react"
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import { Logo } from "../Shared/Logo/Logo"
import LogoutIcon from "@mui/icons-material/Logout"
import PersonIcon from "@mui/icons-material/Person"
import AccountCircle from "@mui/icons-material/AccountCircle"
import LoginIcon from "@mui/icons-material/Login"
import { navlist } from "./constants"
import { colors } from "../../constants/styles.js"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import NavigationMobile from "../Shared/Navigation/NavigationMobile"
import useStyles from "./styles"
import { signOut } from "./utils"
import EmailIcon from "@mui/icons-material/Email"
import api from "../../api/api"
import jwt_decode from "jwt-decode"
import socket from "../../helpers/socket"

export default function Header() {
  const classes = useStyles()
  const [auth, setAuth] = useState(true)
  const [isReceived, setIsReceived] = useState(true)
  const [messageCount, setMessageCount] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)
  const [users, setUsers] = useState([])

  const { id: authId } = jwt_decode(localStorage.getItem("accessToken"))

  useEffect(() => {
    users.forEach((user) => {
      const id = user.id
      const room = id > authId ? `${authId}_${id}` : `${id}_${authId}`
      socket.emit("join", { room, authId })
    })
  })

  useEffect(() => {
    ;(async () => {
      const res = await api.get("users/chat")
      setUsers(res.data.users)
    })()
  }, [isReceived])

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  useEffect(() => {
    ;(async () => {
      const messagesInfo = await api.get("/messages/unread")
      setMessageCount(messagesInfo.data._count.id)
    })()
  }, [])

  // useEffect(() => {
  //   const idTerminal = setInterval(() => {
  //     ;(async () => {
  //       const messagesInfo = await api.get("/messages/unread")
  //       setMessageCount(messagesInfo.data._count.id)
  //     })()
  //   }, 5000)
  //
  //   return () => {
  //     clearInterval(idTerminal)
  //   }
  // }, [])

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
            return <Link url={item.route} color={colors.white} key={index} title={item.name} />
          })}
        </Stack>
        {auth && (
          <>
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
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{
                  borderRadius: 0,
                }}
              >
                <LoginIcon />
                <Typography ml={2}>
                  <Link url="/signin" title="Sign in" color="white" />
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{
                  borderRadius: 0,
                }}
              >
                <Link url="/chat" title={<EmailIcon />} color="white" />
                {messageCount}
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  borderRadius: 0,
                }}
              >
                <AccountCircle />
                <Typography ml={2}>Ashot</Typography>
              </IconButton>
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <Link url="/cabinet/profile" title="My Profile" color="#212121" />
              </MenuItem>
              <MenuItem onClick={signOut}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
