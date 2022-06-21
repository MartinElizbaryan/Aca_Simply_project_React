import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ListItemIcon from "@mui/material/ListItemIcon"
import ArticleIcon from "@mui/icons-material/Article"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import useStyles from "./style"
import { Link } from "react-router-dom"

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
        <Link to="/cabinet/profile" className={classes.link}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/cabinet/createPost" className={classes.link}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Create post" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/cabinet" className={classes.link}>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to="/cabinet/activePosts" className={classes.link}>
          <ListItemIcon>
            <FactCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Active Posts" />
        </Link>
      </ListItemButton>
    </List>
  )
}
