import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { getUserFullName } from "../../helpers/utils"
import useStyles from "./styles"

function ChatUserInfo({ user, id, isActive }) {
  const classes = useStyles()
  return (
    <ListItemButton className={+id === user.id ? classes.clickedBlock : ""}>
      <ListItemIcon>
        <UserAvatar user={user} />
      </ListItemIcon>
      <ListItemText primary={getUserFullName(user)} />
      {/*{!!user.messages_from.length && <FiberManualRecordIcon color={"error"} />}*/}
      <FiberManualRecordIcon color={isActive ? "success" : "disabled"} fontSize="small" />
    </ListItemButton>
  )
}

export default ChatUserInfo
