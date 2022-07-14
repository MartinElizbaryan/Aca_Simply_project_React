import { Link, useLocation } from "react-router-dom"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import useStyles from "./styles"
import { colors } from "../../../../constants/styles"

export const ListItemWithIcon = ({ icon, url, title }) => {
  const { pathname } = useLocation()

  const classes = useStyles()

  return (
    <ListItemButton className={pathname === url && classes.clicked}>
      <Link to={url} className={classes.link}>
        <ListItemIcon sx={pathname === url ? { color: colors.blue } : {}}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </Link>
    </ListItemButton>
  )
}
