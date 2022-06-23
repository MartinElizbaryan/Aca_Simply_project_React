import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { CustomLink } from "../../Shared/CustomLink/CustomLink"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import emptyImage from "../../../assets/adspy_loading_animation.gif"
import { BlueButton } from "../../Shared/Buttons/BlueButton/BlueButton"
import useStyles from "./style"

export default function Posts({ post }) {
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
          {post.name}
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CustomLink
          url={`/post/${post.id}`}
          title={
            <BlueButton
              sx={{
                width: "auto",
              }}
            >
              See details
            </BlueButton>
          }
        />
      </CardActions>
    </Card>
  )
}
