import { Link } from "react-router-dom"
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SettingsIcon from "@mui/icons-material/Settings"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import useStyles from "./style"

export default function SidebarCabinet() {
  const classes = useStyles()
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Cabinet
        </ListSubheader>
      }
    >
      <ListItemButton>
        <Link to="/profile" className={classes.link}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/profile/create-post" className={classes.link}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Create post" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/profile/my-posts" className={classes.link}>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="My Posts" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/profile/confirmed-posts" className={classes.link}>
          <ListItemIcon>
            <FactCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Confirmed Posts" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/profile/favorite-posts" className={classes.link}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favorite Posts" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/profile/settings" className={classes.link}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </Link>
      </ListItemButton>
    </List>
  )
}
