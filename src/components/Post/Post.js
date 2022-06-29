import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import useStyles from "./style"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"

export default function Post({ post, editable }) {
  const classes = useStyles()

  const img = post.images.length ? post.images[0] : emptyImage
  const avatarInitials = post.user.name[0] + post.user.surname[0]

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatarInitials}
          </Avatar>
        }
        title={`${post.user.name} ${post.user.surname}`}
        subheader={post.user.date}
      />
      <CardMedia component="img" height="250" image={img} alt={img} />
      <CardContent>
        <Typography variant="h6" color="text.dark" mb={3}>
          Name: {post.name}
        </Typography>
        <Typography variant="h6" color="text.dark" mb={3}>
          Category: {post.category.name}
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
        <HeartButton favoriteLength={post?.favorites?.length} id={post?.id} />

        {editable && (
          <Link url={`/profile/my-posts/${post.id}`} content={<BlueButton title="Edit" />} />
        )}

        <Link url={`/post/${post.id}`} content={<BlueButton title="See details" />} />
      </CardActions>
    </Card>
  )
}
