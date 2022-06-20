import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { colors } from "../../constants/styles";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function getFirstLetters ( user ) {
  return user.name[0] + user.surname[0];
}
function getUserFullName ( user ) {
  return `${user.name} ${user.surname}`;
}
function ChatUserInfo ( { user , id, isActive} ) {
  return (
    <ListItem sx={ +id === user.id ? { bgcolor: colors.green } : {}}>
      <ListItemIcon>
        {/*<Avatar sx={{ bgcolor: colors.blue }} aria-label="recipe">*/}
        <Avatar sx={{ bgcolor: colors.blue }}>
          {getFirstLetters(user)}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary={getUserFullName(user)} />
      <FiberManualRecordIcon color={isActive ? "success" : "disabled" }/>
    </ListItem>
  )
}

export default ChatUserInfo;