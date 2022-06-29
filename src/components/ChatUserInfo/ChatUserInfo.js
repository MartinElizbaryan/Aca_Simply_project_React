import { Avatar, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import { getFirstLetters, getUserFullName } from "../../helpers/utils"
import useStyles from "./styles"

function ChatUserInfo({ user, id, isActive }) {
  const classes = useStyles()
  return (
    <ListItem className={+id === user.id ? classes.clickedBlock : classes.block}>
      <ListItemIcon>
        <Avatar className={classes.avatar}>{getFirstLetters(user)}</Avatar>
      </ListItemIcon>
      <ListItemText primary={getUserFullName(user)} />
      {!!user.messages_from.length && <FiberManualRecordIcon color={"error"} />}
      <FiberManualRecordIcon color={isActive ? "success" : "disabled"} />
    </ListItem>
  )
}

export default ChatUserInfo
