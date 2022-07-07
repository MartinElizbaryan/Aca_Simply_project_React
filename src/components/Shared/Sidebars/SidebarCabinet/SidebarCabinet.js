import { List, ListSubheader, Paper } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import KeyIcon from "@mui/icons-material/Key"
import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import useStyles from "./styles"
import { useDispatch, useSelector } from "react-redux"
import Box from "@mui/material/Box"

export default function SidebarCabinet() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { auth, info } = useSelector((state) => state.user)

  return (
    <Box>
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

          {info.is_admin && (
            <>
              <ListItemWithIcon
                url="/profile/pending-posts"
                icon={<KeyIcon />}
                title="Pending Posts"
              />

              <ListItemWithIcon url="/profile/faq" icon={<QuestionMarkIcon />} title="FAQ" />
            </>
          )}
        </List>
      </Paper>
    </Box>
  )
}
