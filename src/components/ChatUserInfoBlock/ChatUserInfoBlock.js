import { useEffect, useState } from "react"
import { List } from "@mui/material"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import ChatUserInfo from "../ChatUserInfo/ChatUserInfo"
import api from "../../api/api"
import { colors } from "../../constants/styles"

function ChatUserInfoBlock({ id, onlineUsers }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    ;(async () => {
      const res = await api.get("users/chat")
      setUsers(res.data.users)
    })()
  }, [])

  return (
    <List>
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
