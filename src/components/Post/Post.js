import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import useStyles from "./style"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"
import BeenhereIcon from "@mui/icons-material/Beenhere"
import { IMAGE_BASE_URL } from "../../constants/cloudinery"
import { useTranslation } from "react-i18next"

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
  const avatarInitials = post.user.name[0] + post.user.surname[0]

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatarInitials}
          </Avatar>
        }
        title={`${post.user.name} ${post.user.surname}`}
        subheader={post.user.date}
      />
      {changeable && (
        <IconButton aria-label="delete" color="error" onClick={(e) => deletePost(post.id)}>
          <DeleteIcon />
        </IconButton>
      )}

      {admin && (
        <IconButton onClick={(e) => trustPost(post.id)} aria-label="delete" color="primary">
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
          {post.description.slice(0, 120) + "..."}
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
