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
import { colors } from "../../constants/styles";
import Message from "../Message/Message";
import ChatUserInfoBlock from "../ChatUserInfoBlock/ChatUserInfoBlock";
import api from "../../api/api";
import useStyles from "./style";

const socket = io.connect("http://localhost:5000")

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [onlineUsers, setOnlineUsers] = useState([])
  const [room, setRoom] = useState("")
  const [isSelected, setIsSelected] = useState(false)
  const list = useRef(null)
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    (async ()=>{
      setIsSelected(!!id)
    })()
  },[])

  useEffect(() => {
    (async ()=>{
      const res = await api.get(`/messages/${id}`)
      setMessages(res.data.messages)
    })()
  },[])

  useEffect(() => {
    (async ()=>{
      const res = await api.patch(`/messages/${id}`)
    })()
  },[messages])

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
    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users)
    })
  },[])

  useEffect(() => {
    socket.on("receive", (data) => {
      setMessages((messages) => [...messages, data])
    })
  },[])

  useEffect(() => {
    const el = list.current
    el.scrollTop = el.scrollHeight
  },[messages])

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
      </Grid>
    </Box>
  );
};

export default ChatWindow;
