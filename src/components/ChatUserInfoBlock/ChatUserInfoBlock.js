import React from "react"
import { List, ListItem, useTheme } from "@mui/material"
import ChatUserInfo from "../ChatUserInfo/ChatUserInfo"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { colors } from "../../constants/styles"

function ChatUserInfoBlock({ users, onlineUsers, onClick }) {
  const theme = useTheme()

  return (
    <List onClick={onClick} sx={{ minWidth: 200 }}>
      {users.length ? (
        users.map((user) => {
          const isActive = onlineUsers.includes(user.id)
          return (
            <Link url={`/chat/${user.id}`} key={user.id} color={colors.fontColor}>
              <ChatUserInfo isActive={isActive} user={user} />
            </Link>
          )
        })
      ) : (
        <>
          <ListItem sx={{ marginTop: 5, textAlign: "center", color: theme.palette.mainColor }}>
            {"There is nothing to show. You havn't started the chat yet."}
          </ListItem>
        </>
      )}
    </List>
  )
}

export default ChatUserInfoBlock
