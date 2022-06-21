import {useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Messages from "../Messages/Messages";
import ChatUserInfoBlock from "../ChatUserInfoBlock/ChatUserInfoBlock";
import api from "../../api/api";
import useStyles from "./style";
import socket from "../../helpers/socket"

const Chat = () => {
  const [onlineUsers, setOnlineUsers] = useState([])
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users)
    })
  },[])

  return (
    <Box mt={10} sx={{
      height: 'calc(100% - 80px)',
    }}>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12} md={3} className={classes.borderRight500}>
          <ChatUserInfoBlock onlineUsers={onlineUsers} id={id} />
        </Grid>
        { !!id && <Messages id={id}/>}
      </Grid>
    </Box>
  );
};

export default Chat;
