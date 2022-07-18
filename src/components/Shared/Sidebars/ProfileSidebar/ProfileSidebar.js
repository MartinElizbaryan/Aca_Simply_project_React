import { useTranslation } from "react-i18next"
import { List, useTheme } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LockIcon from "@mui/icons-material/Lock"
import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import AdminSidebar from "../AdminSidebar/AdminSidebar"
import useStyles from "./styles"

export default function ProfileSidebar() {
  const { t } = useTranslation()
  const classes = useStyles()
  const theme = useTheme()
  return (
    <List
      className={classes.list}
      component="nav"
      sx={{
        width: {
          xs: "200px",
          sm: "250px",
        },
        backgroundColor: theme.palette.body,
      }}
    >
      <ListItemWithIcon url="/profile" icon={<AccountCircleIcon />} title={t("Profile")} />
      <ListItemWithIcon url="/profile/my-posts" icon={<ArticleIcon />} title={t("My_Posts")} />
      <ListItemWithIcon
        url="/profile/confirmed-posts"
        icon={<FactCheckIcon />}
        title={t("Confirmed_Posts")}
      />
      <ListItemWithIcon url="/profile/favorites" icon={<FavoriteIcon />} title={t("Favorites")} />
      <ListItemWithIcon url="/profile/security" icon={<LockIcon />} title={t("Security")} />

      <AdminSidebar />
    </List>
  )
}
