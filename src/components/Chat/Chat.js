import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box, Grid, Paper } from "@mui/material"
import ChatUserInfoBlock from "../ChatUserInfoBlock/ChatUserInfoBlock"
import Messages from "../Messages/Messages"
import socket from "../../helpers/socket"
import useStyles from "./styles"

const Chat = () => {
  const [onlineUsers, setOnlineUsers] = useState([])
  const classes = useStyles()
  const { id } = useParams()

  useEffect(() => {
    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users)
    })
  })

  return (
    <Box
      mt={10}
      sx={{
        height: "calc(100% - 80px)",
      }}
    >
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12} md={3} className={classes.borderRight500}>
          <ChatUserInfoBlock onlineUsers={onlineUsers} id={id} />
        </Grid>
        {!!id && <Messages id={id} />}
      </Grid>
    </Box>
  )
}

export default Chat
