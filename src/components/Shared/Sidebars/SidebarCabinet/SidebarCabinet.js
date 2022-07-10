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
import { useTranslation } from "react-i18next"

export default function SidebarCabinet() {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const { auth, info } = useSelector((state) => state.user)

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

          {info.is_admin && (
            <>
              <ListItemWithIcon
                url="/profile/pending-posts"
                icon={<KeyIcon />}
                title={t("Pending_Posts")}
              />

              <ListItemWithIcon url="/profile/faq" icon={<QuestionMarkIcon />} title={t("FAQ")} />
            </>
          )}
        </List>
      </Paper>
    </Box>
  )
}
