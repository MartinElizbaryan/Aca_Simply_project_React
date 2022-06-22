import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
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
import { useParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { useEffect, useState } from "react"
import emptyImage from "../../../assets/adspy_loading_animation.gif"
import moment from "moment"
import useStyles from "./style"
import { BlueButton } from "../../Shared/Buttons/BlueButton/BlueButton"

import PostsSceletonSingle from "../PostsSceletonSingle/PostsSceletonSingle"

export default function PostSingle() {
  const classes = useStyles()
  const { id } = useParams()
  const [post, setPost] = useState({})
  const { data, error, loading } = useFetch(`/posts/${id}`)
  const date = moment(post?.created_at).format("LLLL")
  const avatarInitials = `${post?.user?.name[0]}${post?.user?.surname[0]}`
  useEffect(() => {
    setPost(data.post)
  }, [data])
  if (loading)
    return (
      <Container size="md">
        <Box
          sx={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <PostsSceletonSingle />
        </Box>
      </Container>
    )
  else
    return (
      <Container size="md">
        <Box
          sx={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Card>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar} aria-label="recipe">
                  {avatarInitials}
                </Avatar>
              }
              title={`${post?.user?.name} ${post?.user?.surname}`}
              subheader={date}
            />
            <CardMedia
              component="img"
              sx={{
                maxHeight: 500,
                minHeight: 250,
                objectFit: "contain",
              }}
              image={post?.images ? post.images[0] : emptyImage}
              alt={post?.created_at}
            />
            <CardContent>
              <Typography variant="h5" color="text.dark" mb={3}>
                {post?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post?.description}
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
              <BlueButton
                sx={{
                  width: "auto",
                }}
              >
                <CustomLink
                  url="/chat/1"
                  title="Start chat"
                  component="button"
                  variant="outlined"
                  color="#fff"
                />
              </BlueButton>
            </CardActions>
          </Card>
        </Box>
      </Container>
    )
}
