import { Badge, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { getUserFullName } from "../../helpers/utils"
import useStyles from "./styles"

function ChatUserInfo({ user, id, isActive }) {
  const classes = useStyles()
  return (
    <ListItemButton className={+id === user.id ? classes.clickedBlock : ""}>
      <ListItemIcon>
        <Badge badgeContent={user.messages_from.length} color="primary" className={classes.badge}>
          <UserAvatar user={user} />
        </Badge>
      </ListItemIcon>
      <ListItemText primary={getUserFullName(user)} />
      <FiberManualRecordIcon color={isActive ? "success" : "disabled"} fontSize="small" />
    </ListItemButton>
  )
}

export default ChatUserInfo
