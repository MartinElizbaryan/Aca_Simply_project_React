import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box, Divider, Grid, IconButton, Stack, SwipeableDrawer, useTheme } from "@mui/material"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import Messages from "../Messages/Messages"
import UserInfo from "../Shared/UserInfo/UserInfo"
import ChatUserInfoBlock from "../ChatUserInfoBlock/ChatUserInfoBlock"
import api from "../../api/api"
import socket from "../../helpers/socket"
import { findUser } from "../../helpers/utils"
import useStyles from "./styles"

const Chat = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(!id && true)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [users, setUsers] = useState([])
  const theme = useTheme()
  const classes = useStyles()

  useEffect(() => {
    ;(async () => {
      const res = await api.get("users/chat")
      setUsers(res.data.users)
    })()
  }, [])

  useEffect(() => {
    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users)
    })

    socket.on("chatUsersUpdate", async () => {
      const res = await api.get("users/chat")
      setUsers(res.data.users)
    })

    socket.emit("getOnlineUsers")
  }, [])

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <Box mt={9} className={classes.container}>
      <Grid container className={classes.chatSection}>
        <Grid
          item
          md={3}
          className={classes.borderRight}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <ChatUserInfoBlock onlineUsers={onlineUsers} users={users} />
        </Grid>
        <Grid
          item
          p={1}
          xs={12}
          className={classes.borderBottom}
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            zIndex: 15,
            backgroundColor: theme.palette.body,
            color: theme.palette.mainColor,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="primary" onClick={toggleDrawer(true)}>
              <PeopleAltIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <UserInfo user={findUser(users, id)} />
          </Stack>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <ChatUserInfoBlock
              onClick={toggleDrawer(false)}
              users={users}
              onlineUsers={onlineUsers}
            />
          </SwipeableDrawer>
        </Grid>
        <Messages />
      </Grid>
    </Box>
  )
}

export default Chat
