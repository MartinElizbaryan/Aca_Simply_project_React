import { useState } from "react"
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
import DoneIcon from "@mui/icons-material/Done"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import BlurBox from "../Shared/BlurBox/BlurBox"
import { getUserFullName } from "../../helpers/utils"
import { CLOUDINARY_BASE_URL } from "../../constants/constants"
import emptyImage from "../../assets/adspy_loading_animation.gif"

export default function Post({ post, trustPost, admin, deleteFromMyFavorites }) {
  const [trusted, setTrusted] = useState(post.trusted)
  const { t } = useTranslation()

  const img = post.images.length ? `${CLOUDINARY_BASE_URL}${post.images[0].src}` : emptyImage

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar user={post.user} />}
        title={getUserFullName(post.user)}
        subheader={post.user.date}
        action={
          <>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", height: "50px" }}>
              {trusted && (
                <>
                  <VisibilityIcon color="action" />
                  <Typography fontWeight="bold">{post.views}</Typography>
                </>
              )}
              <Box>
                {admin && (
                  <IconButton
                    onClick={() => {
                      trustPost(post.id)
                      setTrusted(true)
                    }}
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
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt={img}
          sx={{
            filter: (!post.trusted || post.completed) && "blur(7px)",
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
        <Box>
          <Chip
            icon={<DoneIcon />}
            label={t(post.type)}
            variant="outlined"
            onClick={() => {}}
            sx={{ marginRight: 2 }}
          />
          <Chip
            icon={<DoneIcon />}
            label={t(post.category.name)}
            variant="outlined"
            onClick={() => {}}
          />
        </Box>
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
        <Box>
          <Link url={`/posts/${post.id}`}>
            <BlueButton>{t("See_details")}</BlueButton>
          </Link>
        </Box>
      </CardActions>
    </Card>
  )
}
