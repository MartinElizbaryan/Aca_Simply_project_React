import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Divider, Grid, IconButton, List } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import Message from "../Message/Message"
import api from "../../api/api"
import socket from "../../helpers/socket"
import { getUserInfo } from "../../redux/userSelectors"
import { withIdChecking } from "../../hocs/withIdChecking"
import useStyles from "./styles"
import ChatInput from "../Shared/Inputs/ChatInput/ChatInput"

function Messages() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const list = useRef(null)
  const user = useSelector(getUserInfo)
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const classes = useStyles()

  useEffect(() => {
    if (+id === user.id) {
      navigate("/profile")
    }

    ;(async () => {
      const res = await api.get(`/messages/${id}`)
      setMessages(res.data.messages)
    })()
    ;(async () => {
      await api.patch(`/messages/${id}`)
      socket.emit("messageIsSeen", { to_id: id })
    })()
  }, [id])

  useEffect(() => {
    const el = list.current
    el.scrollTop = el.scrollHeight
  }, [messages, id])

  useEffect(() => {
    socket.on("receive", async (data) => {
      if (+id === data.from_id) {
        setMessages((messages) => [...messages, data])

        await api.patch(`/messages/${id}`)
        socket.emit("messageIsSeen", { to_id: id })
      }
    })

    socket.on("seenMessages", async () => {
      const res = await api.get(`/messages/${id}`)
      setMessages(res.data.messages)
    })

    return () => {
      socket.off("receive")
      socket.off("seenMessages")
    }
  }, [id])

  const sendMessage = async () => {
    try {
      if (!message) return
      const res = await api.post(`/messages/${id}`, {
        text: message,
      })
      const data = res.data.message
      await socket.emit("send", {
        data,
      })

      setMessages((messages) => [...messages, data])
      setMessage("")
    } catch (e) {
      console.log(e)
    }
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
              isSeen={message.is_seen}
              createdAt={message.created_at}
            />
          )
        })}
      </List>

      <Divider />
      <Box display="flex" alignItems="center">
        <ChatInput
          placeholder={t("Type_placeholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {
            e.key === "Enter" && sendMessage()
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Grid>
  )
}

export default withIdChecking(Messages)
