import {useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import Message from "../Message/Message";
import api from "../../helpers/api";
import useStyles from "./style";
import ChatUserInfoBlock from "../ChatUserInfoBlock/ChatUserInfoBlock";

const socket = io.connect("http://localhost:5000")

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [onlineUsers, setOnlineUsers] = useState([])
  const [room, setRoom] = useState("")
  const list = useRef(null)
  const classes = useStyles();
  const { id } = useParams();
  
  useEffect(() => {
    (async ()=>{
      const res = await api.get(`/messages/${id}`)
      setMessages(res.data.messages)
    })()
  },[])

  useEffect(() => {
    socket.on("receive", (data) => {
      setMessages((messages) => [...messages, data])
    })
  },[])

  useEffect(() => {
    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users)
    })
  },[])

  useEffect(() => {
    const room = createRoom()
    setRoom(room)
    const {id: authId} = jwt_decode(localStorage.getItem("accessToken"))
    socket.emit('join', {room, authId})
    return () => {
      socket.emit("leave", room)
    }
  },[])
  
  useEffect(() => {
    const el = list.current
    el.scrollTop = el.scrollHeight
  },[messages])

  console.log(onlineUsers)

  const sendMessage = async () => {
    try {
      const res = await api.post(`/messages/${id}`,{
        text: message,
      })
      const data = res.data.message
      await socket.emit('send', {
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
    const {id: authId} = jwt_decode(localStorage.getItem("accessToken"))
    return id > authId ? `${authId}_${id}` : `${id}_${authId}`
  }

  return (
    <Box mt={10}>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12} md={3} className={classes.borderRight500}>
          <ChatUserInfoBlock onlineUsers={onlineUsers} id={id} />
        </Grid>
        <Grid item xs={12} md={9}>
          <List className={classes.messageArea} ref={list}>
            {
              messages.map((message) => {
                return <Message key={message.id} type={message.to_id === +id ? "from" : "to"} message={message.text} time={message.created_at} />
              })
            }
          </List>
          <Divider />
          {/* <Paper
            component="form"
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
          > */}
          <div>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Type..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              onKeyUp={(e)=> {
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
          </div>
          {/* </Paper> */}
          {error && <p>{error}</p>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatWindow;
