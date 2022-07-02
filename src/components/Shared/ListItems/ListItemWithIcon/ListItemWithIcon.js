import { Link } from "react-router-dom"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import useStyles from "./styles"

export const ListItemWithIcon = ({ icon, url, title }) => {
  const classes = useStyles()

  return (
    <ListItemButton>
      <Link to={url} className={classes.link}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </Link>
    </ListItemButton>
  )
}
