import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useStyles from "./style";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import { colors } from "../../constants/styles";
import Message from "./Message";
import api from "../../helpers/api";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000")


const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const classes = useStyles();
  const { id } = useParams();
  
  useEffect(() => {
    (async ()=>{
      const res = await api.get(`/messages/${id}`)
      setMessages(res.data.messages)
    })()
  },[])
  return (
    <Box mt={10}>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12} md={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar sx={{ bgcolor: colors.blue }} aria-label="recipe">
                  AK
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Artur Karapetyan">
                Artur Karapetyan
              </ListItemText>
              <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
            <ListItem button key="Alice">
              <ListItemIcon>
                <Avatar sx={{ bgcolor: colors.green }} aria-label="recipe">
                  VX
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Vaxinak Xachatryan">
                Vaxinak Xachatryan
              </ListItemText>
              <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={9}>
          <List className={classes.messageArea}>
            {
              messages.map((message) => {
                return <Message key={message.id} type={message.to_id === +id ? "to" : "from"} message={message.text} time={message.created_at} />
              })
            }
          </List>
          <Divider />
          <Paper
            component="form"
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
              fullWidth
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatWindow;
