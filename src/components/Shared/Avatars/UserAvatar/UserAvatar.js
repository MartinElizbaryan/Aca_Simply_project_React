import { Avatar } from "@mui/material"
import { getFirstLetters } from "../../../../helpers/utils"
import useStyles from "./styles"

function UserAvatar({ user, ...props }) {
  const classes = useStyles()
  return (
    <Avatar className={classes.avatar} {...props}>
      {getFirstLetters(user)}
    </Avatar>
  )
}

export default UserAvatar
