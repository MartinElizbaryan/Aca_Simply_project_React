import { useTranslation } from "react-i18next"
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import BeenhereIcon from "@mui/icons-material/Beenhere"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import { getUserFullName } from "../../helpers/utils"
import { IMAGE_BASE_URL } from "../../constants/cloudinary"
import useStyles from "./styles"

export default function Post({
  post,
  changeable,
  deletePost,
  trustPost,
  editable,
  admin,
  deleteFromMyFavorites,
}) {
  const { t } = useTranslation()
  const classes = useStyles()

  const img = post.images.length ? `${IMAGE_BASE_URL}${post.images[0].src}` : emptyImage

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minWidth: "300px",
      }}
    >
      <CardHeader
        avatar={<UserAvatar user={post.user} />}
        title={getUserFullName(post.user)}
        subheader={post.user.date}
      />
      {changeable && (
        <IconButton aria-label="delete" color="error" onClick={() => deletePost(post.id)}>
          <DeleteIcon />
        </IconButton>
      )}

      {admin && (
        <IconButton onClick={() => trustPost(post.id)} aria-label="delete" color="primary">
          <BeenhereIcon />
        </IconButton>
      )}

      {changeable && <div>{post.trusted ? t("Trusted") : t("Pending")}</div>}

      {changeable && <div>{post.completed ? "is Closed" : "is Opened"}</div>}

      <CardMedia component="img" height="250" image={img} alt={img} />
      <CardContent
        sx={{
          flex: "1 1 auto",
        }}
      >
        <Typography variant="h6" component="p" color="text.dark" mb={3}>
          {post.name}
        </Typography>
        <Typography variant="p" component="p" color="text.dark" mb={3}>
          {t("Category")}: {t(post.category.name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description.length > 30 ? post.description.slice(0, 30) + "..." : post.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <HeartButton post={post} deleteFromMyFavorites={deleteFromMyFavorites} />
        {editable && (
          <Link
            url={`/profile/my-posts/${post.id}`}
            content={<BlueButton>{t("Edit")}</BlueButton>}
          />
        )}

        <Link url={`/posts/${post.id}`} content={<BlueButton>{t("See_details")}</BlueButton>} />
      </CardActions>
    </Card>
  )
}
