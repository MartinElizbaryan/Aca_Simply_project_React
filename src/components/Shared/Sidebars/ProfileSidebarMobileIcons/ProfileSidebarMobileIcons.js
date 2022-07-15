import { List, ListItemButton } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ArticleIcon from "@mui/icons-material/Article"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LockIcon from "@mui/icons-material/Lock"
import { useTranslation } from "react-i18next"

export default function ProfileSidebarMobileIcons() {
  const { t } = useTranslation()

  return (
    <List
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        boxShadow: "4px 4px 20px rgb(0 0 0 / 20%)",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <AccountCircleIcon />
      </ListItemButton>
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ArticleIcon />
      </ListItemButton>
      <ListItemButton sx={{ justifyContent: "center", alignItems: "center" }}>
        <FactCheckIcon />
      </ListItemButton>
      <ListItemButton sx={{ justifyContent: "center", alignItems: "center" }}>
        <FavoriteIcon />
      </ListItemButton>
      <ListItemButton sx={{ justifyContent: "center", alignItems: "center" }}>
        <LockIcon />
      </ListItemButton>
    </List>
  )
}
