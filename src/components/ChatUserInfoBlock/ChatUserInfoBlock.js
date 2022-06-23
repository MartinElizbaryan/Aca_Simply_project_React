import List from "@mui/material/List"
import React, { useEffect, useState } from "react"
import ChatUserInfo from "../ChatUserInfo/ChatUserInfo"
import api from "../../api/api"
import { Link } from "react-router-dom"

function ChatUserInfoBlock({ id, onlineUsers }) {
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   ;(async () => {
  //     const res = await api.get("users/chat")
  //     console.log(res.data.users)
  //     setUsers(res.data.users)
  //   })()
  // }, [])

  useEffect(() => {
    const idTerminal = setInterval(() => {
      ;(async () => {
        const res = await api.get("users/chat")
        console.log(res.data.users)
        setUsers(res.data.users)
      })()
    }, 100_000)

    return () => {
      clearInterval(idTerminal)
    }
  }, [])

  return (
    <List>
      {users.map((user) => {
        const isActive = onlineUsers.includes(user.id)
        return (
          <Link to={`/chat/${user.id}`} key={user.id}>
            <ChatUserInfo isActive={isActive} user={user} id={id} />
          </Link>
        )
      })}
    </List>
  )
}

export default ChatUserInfoBlock
