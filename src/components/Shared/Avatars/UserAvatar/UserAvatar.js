import { Avatar, useTheme } from "@mui/material"
import { getFirstLetters } from "../../../../helpers/utils"
import useStyles from "./styles"

function UserAvatar({ user, ...props }) {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Avatar
      className={classes.avatar}
      sx={{
        backgroundColor: theme.palette.blurBlue.main,
        color: "white",
      }}
      {...props}
    >
      {getFirstLetters(user)}
    </Avatar>
  )
}

export default UserAvatar
