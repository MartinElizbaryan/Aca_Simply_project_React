import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box, Divider, Grid, IconButton, Paper, SwipeableDrawer, Typography } from "@mui/material"
import ChatUserInfoBlock from "../ChatUserInfoBlock/ChatUserInfoBlock"
import Messages from "../Messages/Messages"
import useStyles from "./styles"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import api from "../../api/api"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { getUserFullName } from "../../helpers/utils"
import { findUser } from "./utils"
import socket from "../../helpers/socket"

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [users, setUsers] = useState([])
  const { id } = useParams()

  console.log(users)

  const classes = useStyles()

  useEffect(() => {
    ;(async () => {
      const res = await api.get("users/chat")
      setUsers(res.data.users)
    })()
  }, [])

  useEffect(() => {
    socket.on("onlineUsers", (users) => {
      // console.log("chat useffect", users)
      setOnlineUsers(users)
      // console.log(onlineUsers)
    })

    socket.on("seen", async () => {
      const res = await api.get("users/chat")
      setUsers(res.data.users)
    })

    socket.emit("getOnlineUsers")
  }, [])

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <Box
      mt={10}
      sx={{
        height: "calc(100% - 80px)",
      }}
    >
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid
          item
          md={3}
          className={classes.borderRight}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <ChatUserInfoBlock onlineUsers={onlineUsers} id={id} users={users} />
        </Grid>
        <Grid
          item
          p={1}
          xs={12}
          gap={1}
          flexDirection="row"
          alignItems="center"
          className={classes.borderBottom}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <IconButton color="primary" onClick={toggleDrawer(true)}>
            <PeopleAltIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          {id && (
            <>
              <UserAvatar user={findUser(users, id)} />
              <Typography variant="body1">{getUserFullName(findUser(users, id))}</Typography>
            </>
          )}
          <SwipeableDrawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <ChatUserInfoBlock
              onClick={toggleDrawer(false)}
              users={users}
              onlineUsers={onlineUsers}
              id={id}
            />
          </SwipeableDrawer>
        </Grid>

        {!!id && <Messages id={id} />}
      </Grid>
    </Box>
  )
}

export default Chat
