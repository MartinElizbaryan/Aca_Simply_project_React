import { List, Paper } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import KeyIcon from "@mui/icons-material/Key"
import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import useStyles from "./styles"
import Box from "@mui/material/Box"
import { useTranslation } from "react-i18next"
import AdminSidebar from "../AdminSidebar/AdminSidebar"

export default function SidebarCabinet() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Box>
      <Paper elevation={2} sx={{ maxWidth: 300 }}>
        <List className={classes.list} component="nav">
          <ListItemWithIcon url="/profile" icon={<AccountCircleIcon />} title={t("Profile")} />
          <ListItemWithIcon
            url="/profile/create-post"
            icon={<AddCircleOutlineIcon />}
            title={t("Create_Post")}
          />
          <ListItemWithIcon url="/profile/my-posts" icon={<ArticleIcon />} title={t("My_Posts")} />
          <ListItemWithIcon
            url="/profile/confirmed-posts"
            icon={<FactCheckIcon />}
            title={t("Confirmed_Posts")}
          />
          <ListItemWithIcon
            url="/profile/favorite-posts"
            icon={<FavoriteIcon />}
            title={t("Favorite_Posts")}
          />
          <ListItemWithIcon
            url="/profile/change-password"
            icon={<KeyIcon />}
            title={t("Change_Password")}
          />

          <AdminSidebar />
        </List>
      </Paper>
    </Box>
  )
}
