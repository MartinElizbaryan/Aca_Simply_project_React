import React from "react"
import { List } from "@mui/material"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import ChatUserInfo from "../ChatUserInfo/ChatUserInfo"
import { colors } from "../../constants/styles"

function ChatUserInfoBlock({ id, users, onlineUsers, onClick }) {
  return (
    <List onClick={onClick}>
      {users.map((user) => {
        const isActive = onlineUsers.includes(user.id)
        return (
          <Link
            url={`/chat/${user.id}`}
            key={user.id}
            content={<ChatUserInfo isActive={isActive} user={user} id={id} />}
            color={colors.fontColor}
          />
        )
      })}
    </List>
  )
}

export default ChatUserInfoBlock
