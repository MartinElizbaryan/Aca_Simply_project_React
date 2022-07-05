import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppBar, Box, Stack, Toolbar } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import { TransparentButton } from "../Shared/Buttons/TransparentButton/TransparentButton"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import NavigationMobile from "../Shared/Navigation/NavigationMobile"
import UserControlBlock from "../UserControlBlock/UserControlBlock"
import { Logo } from "../Shared/Logo/Logo"
import api from "../../api/api"
import { navlist } from "./constants"
import { getUserAuth } from "../../redux/userSelectors"
import { colors } from "../../constants/styles.js"
import useStyles from "./styles"

export default function Header() {
  const classes = useStyles()
  const auth = useSelector(getUserAuth)
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
      const getUserChats = async () => {
        try {
          const res = await api.get("users/chat")
          setUsers(res.data.users)
        } catch (e) {
          console.log(e)
        }
      }
      if (auth) getUserChats()
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
              content={<TransparentButton icon={<LoginIcon />} title="Sign In" />}
              color="white"
            />
          ) : (
            <UserControlBlock />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
