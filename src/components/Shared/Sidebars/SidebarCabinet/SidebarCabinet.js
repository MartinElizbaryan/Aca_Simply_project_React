import { useTranslation } from "react-i18next"
import { List } from "@mui/material"
import KeyIcon from "@mui/icons-material/Key"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import AdminSidebar from "../AdminSidebar/AdminSidebar"
import useStyles from "./styles"

export default function SidebarCabinet() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <List className={classes.list} component="nav">
      <ListItemWithIcon url="/profile" icon={<AccountCircleIcon />} title={t("Profile")} />
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
  )
}
