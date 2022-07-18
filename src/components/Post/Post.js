import { useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import BeenhereIcon from "@mui/icons-material/Beenhere"
import DeleteIcon from "@mui/icons-material/Delete"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import BlurBox from "../Shared/BlurBox/BlurBox"
import EditPost from "../EditPost/EditPost"
import { getUserFullName } from "../../helpers/utils"
import { CLOUDINARY_BASE_URL } from "../../constants/constants"
import { getUserIsAdmin } from "../../redux/user/userSelectors"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import useStyles from "./styles"

export default function Post({
  post,
  deletePost,
  trustPost,
  editable,
  // changeable,
  // pending,
  deleteFromMyFavorites,
}) {
  const [openEditPost, setOpenEditPost] = useState(false)
  const isAdmin = useSelector(getUserIsAdmin)
  const { t } = useTranslation()
  const classes = useStyles()

  const img = post.images.length ? `${CLOUDINARY_BASE_URL}${post.images[0].src}` : emptyImage

  const toggleOpenEditPost = (open) => {
    setOpenEditPost(open)
  }

  // console.log(post)

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar user={post.user} />}
        title={getUserFullName(post.user)}
        subheader={post.user.date}
        action={
          <>
            <Stack
              direction="row"
              spacing={2}
              sx={{ marginRight: "10px", alignItems: "center", height: "50px" }}
            >
              <VisibilityIcon />
              <Typography fontWeight="bold">{post.views}</Typography>
              <Box>
                {(editable || isAdmin) && (
                  <IconButton onClick={() => deletePost(post.id)}>
                    <DeleteIcon />
                  </IconButton>
                )}
                {isAdmin && !post.trusted && (
                  <IconButton
                    onClick={() => trustPost(post.id)}
                    color="primary"
                    sx={{ marginLeft: 0 }}
                  >
                    <BeenhereIcon />
                  </IconButton>
                )}
              </Box>
            </Stack>
          </>
        }
      />
      <Divider />
      {/*{changeable && <div>{post.completed ? "is Closed" : "is Opened"}</div>}*/}
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt={img}
          sx={{
            filter: "blur(7px)",
          }}
        />
        {!post.trusted && <BlurBox>Pending...</BlurBox>}
        {post.completed && <BlurBox>Completed!</BlurBox>}
      </Box>
      <Divider />
      <CardContent
        sx={{
          flex: "1 1 auto",
        }}
      >
        <Typography variant="h6" color="text.dark" mb={3} fontWeight="bold">
          {post.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          {post.description.length > 30 ? post.description.slice(0, 30) + "..." : post.description}
        </Typography>
        <Chip label={t(post.category.name)} variant="outlined" onClick={() => {}} />
      </CardContent>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <HeartButton post={post} deleteFromMyFavorites={deleteFromMyFavorites} />
        {editable && <BlueButton onClick={() => toggleOpenEditPost(true)}>{t("Edit")}</BlueButton>}
        <EditPost post={post} open={openEditPost} toggleOpen={toggleOpenEditPost} />
        <Link url={`/posts/${post.id}`}>
          <BlueButton>{t("See_details")}</BlueButton>
        </Link>
      </CardActions>
    </Card>
  )
}
