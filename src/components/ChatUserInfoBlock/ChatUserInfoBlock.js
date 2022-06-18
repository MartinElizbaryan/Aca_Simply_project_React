import List from "@mui/material/List";
import {useEffect, useState} from "react";
import ChatUserInfo from "../ChatUserInfo/ChatUserInfo";
import api from "../../helpers/api";


function ChatUserInfoBlock({id, onlineUsers}) {

  const [ users, setUsers] = useState([]);

  useEffect(() => {
    (async ()=>{
      const res = await api.get(`users/chat`)
      console.log(res)
      setUsers(res.data.users)
    })()
  },[])





  return (
    <List>
      {/* eslint-disable-next-line array-callback-return */}
      {

        users.map(user => {
          const isActive = onlineUsers.includes(user.id);
          return <ChatUserInfo isActive={isActive} key={user.id} user={user} id={id}/>
      })}
    </List>
  )
}

export default ChatUserInfoBlock;
