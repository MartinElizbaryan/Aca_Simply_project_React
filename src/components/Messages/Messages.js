import List from "@mui/material/List"
import Message from "../Message/Message"
import Divider from "@mui/material/Divider"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SendIcon from "@mui/icons-material/Send"
import Grid from "@mui/material/Grid"
import { useEffect, useRef, useState } from "react"
import useStyles from "../Chat/style"
import api from "../../api/api"
import jwt_decode from "jwt-decode"
import socket from "../../helpers/socket"
import Box from "@mui/material/Box"

function Messages({ id }) {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [room, setRoom] = useState("")
  const list = useRef(null)
  const classes = useStyles()
  useEffect(() => {
    ;(async () => {
      const res = await api.get(`/messages/${id}`)
      setMessages(res.data.messages)
    })()

    socket.on("receive", (data) => {
      setMessages((messages) => [...messages, data])
    })

    const room = createRoom()
    setRoom(room)

    const { id: authId } = jwt_decode(localStorage.getItem("accessToken"))
    socket.emit("join", { room, authId })

    return () => {
      socket.emit("leave", room)
    }
  }, [id])

  useEffect(() => {
    ;(async () => {
      await api.patch(`/messages/${id}`)
    })()

    const el = list.current
    el.scrollTop = el.scrollHeight
  }, [messages])

  const sendMessage = async () => {
    try {
      const res = await api.post(`/messages/${id}`, {
        text: message,
      })
      const data = res.data.message
      await socket.emit("send", {
        room,
        data,
      })
      setMessages((messages) => [...messages, data])
      setError("")
      setMessage("")
    } catch (e) {
      setError(e.response.data.details[0].message)
    }
  }

  const createRoom = () => {
    const { id: authId } = jwt_decode(localStorage.getItem("accessToken"))
    return id > authId ? `${authId}_${id}` : `${id}_${authId}`
  }

  return (
    <Grid item xs={12} md={9}>
      <List className={classes.messageArea} ref={list}>
        {messages.map((message) => {
          return (
            <Message
              key={message.id}
              type={message.to_id === +id ? "from" : "to"}
              message={message.text}
              time={message.created_at}
            />
          )
        })}
      </List>

      <Divider />
      {/* <Paper
            component="form"
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
          > */}
      <Box display="flex" alignItems="center">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {
            e.key === "Enter" && sendMessage()
          }}
          // inputProps={{ "aria-label": "search google maps" }}
          fullWidth
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          // aria-label="directions"
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </Box>
      {/* </Paper> */}
      {error && <p>{error}</p>}
    </Grid>
  )
}

export default Messages
