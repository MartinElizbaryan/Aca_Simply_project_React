import { Box, List, ListSubheader, Paper } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import KeyIcon from "@mui/icons-material/Key"
import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import useStyles from "./styles"

export default function SidebarCabinet() {
  const classes = useStyles()

  return (
    <Box p={2}>
      <Paper elevation={2} sx={{ maxWidth: 300 }}>
        <List
          className={classes.list}
          component="nav"
          subheader={<ListSubheader component="div">Cabinet</ListSubheader>}
        >
          <ListItemWithIcon url="/profile" icon={<AccountCircleIcon />} title="Profile" />
          <ListItemWithIcon
            url="/profile/create-post"
            icon={<AddCircleOutlineIcon />}
            title="Create post"
          />
          <ListItemWithIcon url="/profile/my-posts" icon={<ArticleIcon />} title="My Posts" />
          <ListItemWithIcon
            url="/profile/confirmed-posts"
            icon={<FactCheckIcon />}
            title="Confirmed Posts"
          />
          <ListItemWithIcon
            url="/profile/favorite-posts"
            icon={<FavoriteIcon />}
            title="Favorite Posts"
          />
          <ListItemWithIcon
            url="/profile/change-password"
            icon={<KeyIcon />}
            title="Change Password"
          />
        </List>
      </Paper>
    </Box>
  )
}
