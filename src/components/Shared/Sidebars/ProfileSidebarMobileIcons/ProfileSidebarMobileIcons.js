import { List, ListItemButton } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LockIcon from "@mui/icons-material/Lock"
import AdminSidebar from "../AdminSidebar/AdminSidebar"

export default function ProfileSidebarMobileIcons() {
  return (
    <List component="nav">
      <ListItemButton>
        <AccountCircleIcon />
      </ListItemButton>
      <ListItemButton>
        <ArticleIcon />
      </ListItemButton>

      <ListItemButton>
        <FactCheckIcon />
      </ListItemButton>
      <ListItemButton>
        <FavoriteIcon />
      </ListItemButton>

      <ListItemButton>
        <LockIcon />
      </ListItemButton>

      {/*<ListItemWithIcon url="/profile" icon={} title={t("Profile")} />*/}
      {/*<ListItemWithIcon url="/profile/my-posts" icon={} title={t("My_Posts")} />*/}
      {/*<ListItemWithIcon*/}
      {/*  url="/profile/confirmed-posts"*/}
      {/*  icon={}*/}
      {/*  title={t("Confirmed_Posts")}*/}
      {/*/>*/}
      {/*<ListItemWithIcon url="/profile/favorites" icon={} title={t("Favorites")} />*/}
      {/*<ListItemWithIcon url="/profile/security" icon={} title={t("Security")} />*/}

      <AdminSidebar />
    </List>
  )
}
