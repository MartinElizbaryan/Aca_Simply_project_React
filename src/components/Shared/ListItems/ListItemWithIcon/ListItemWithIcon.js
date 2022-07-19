import { Link, useLocation } from "react-router-dom"
import { ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import useStyles from "./styles"
import { colors } from "../../../../constants/styles"

export const ListItemWithIcon = ({ icon, url, title }) => {
  const { pathname } = useLocation()
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Link
      to={url}
      className={classes.link}
      style={{
        color: theme.palette.mainColor,
      }}
    >
      <ListItemButton className={pathname === url && classes.clicked}>
        <ListItemIcon sx={pathname === url ? { color: colors.blue } : {}}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </Link>
  )
}
