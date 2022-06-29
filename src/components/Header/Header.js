import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import PersonIcon from "@mui/icons-material/Person"
import AccountCircle from "@mui/icons-material/AccountCircle"
import LoginIcon from "@mui/icons-material/Login"
import MailIcon from "@mui/icons-material/Mail"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import NavigationMobile from "../Shared/Navigation/NavigationMobile"
import { Logo } from "../Shared/Logo/Logo"
import { signOut } from "../../redux/userSlice"
import { signOutFunction } from "./utils"
import { navlist } from "./constants"
import api from "../../api/api"
import { colors } from "../../constants/styles.js"
import useStyles from "./styles"

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const { auth, info } = useSelector((state) => state.user)
  const [anchorEl, setAnchorEl] = useState(null)
  const [users, setUsers] = useState([])
  // const [isReceived, setIsReceived] = useState(true)
  // const [messageCount, setMessageCount] = useState([])

  // useEffect(() => {
  //   users.forEach((user) => {
  //     const id = user.id
  //     const room = id > info.id ? `${info.id}_${id}` : `${id}_${info.id}`
  //     socket.emit("join", { room, authId: info.id })
  //   })
  //
  //   // return () => {
  //   //   users.forEach((user) => {
  //   //     const id = user.id
  //   //     const room = id > info.id ? `${info.id}_${id}` : `${id}_${info.id}`
  //   //     socket.emit("leave", { room, authId: info.id })
  //   //   })
  //   // }
  // }, [])

  useEffect(
    () => {
      ;(async () => {
        const res = await api.get("users/chat")
        setUsers(res.data.users)
      })()
    },
    [
      /*isReceived*/
    ]
  )

  // useEffect(() => {
  //   socket.on("messageAdded", () => {
  //     console.log("receive in header")
  //     setIsReceived(!isReceived)
  //   })
  // }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // useEffect(() => {
  //   ;(async () => {
  //     const messagesInfo = await api.get("/messages/unread")
  //     setMessageCount(messagesInfo.data._count.id)
  //   })()
  // }, [isReceived])

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
                <IconButton
                  size="large"
                  aria-label="sign in"
                  color="inherit"
                  sx={{
                    borderRadius: 0,
                  }}
                >
                  <LoginIcon />
                  <Typography ml={2}>Sign in</Typography>
                </IconButton>
              }
              color="white"
            />
          ) : (
            <>
              <IconButton
                size="large"
                aria-label="messages"
                color="inherit"
                sx={{
                  borderRadius: 0,
                }}
              >
                <Badge badgeContent={0} color="primary">
                  <Link url="/chat" content={<MailIcon />} color="white" />
                </Badge>
                {/*{messageCount}*/}
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  borderRadius: 0,
                }}
              >
                <AccountCircle />
                <Typography ml={2}>{info.name}</Typography>
              </IconButton>
            </>
          )}
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
            <Link url="/profile" content="My Profile" color="#212121" />
          </MenuItem>
          <MenuItem
            onClick={async () => {
              const status = await signOutFunction()
              if (status === 204) {
                dispatch(signOut())
                setAnchorEl(null)
                navigate("/signin")
              }
            }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Sign Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
