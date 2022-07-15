import React from "react"
import { List } from "@mui/material"
import ChatUserInfo from "../ChatUserInfo/ChatUserInfo"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { colors } from "../../constants/styles"

function ChatUserInfoBlock({ users, onlineUsers, onClick }) {
  return (
    <List onClick={onClick} sx={{ minWidth: 200 }}>
      {users.map((user) => {
        const isActive = onlineUsers.includes(user.id)
        return (
          <Link url={`/chat/${user.id}`} key={user.id} color={colors.fontColor}>
            <ChatUserInfo isActive={isActive} user={user} />
          </Link>
        )
      })}
    </List>
  )
}

export default ChatUserInfoBlock
