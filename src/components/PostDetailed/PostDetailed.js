import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import moment from "moment"
// Slider imports
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import Slider from "../Slider/Slider"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { Questions } from "../Shared/Dialogs/Questions/Questions"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import PostsSceletonSingle from "../PostsSceletonSingle/PostsSceletonSingle"
import api from "../../api/api"
import { useFetch } from "../../hooks/useFetch"
import { getUserInfo, getUserIsAdmin } from "../../redux/user/userSelectors"
import { getUserFullName } from "../../helpers/utils"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import useStyles from "./styles"

const PostDetailed = () => {
  const [post, setPost] = useState({})
  const [open, setOpen] = useState(false)
  const [questions, setQuestions] = useState({})
  const [openEditPost, setOpenEditPost] = useState(false)

  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector(getUserInfo)
  const is_admin = useSelector(getUserIsAdmin)
  const { data, error, loading } = useFetch(`/posts/${id}/with-questions`)

  const classes = useStyles()

  const date = moment(post?.created_at).format("LLLL")

  useEffect(() => {
    console.log(data?.post?.trusted, "trusted")
    console.log(is_admin, "is_admin")

    if (data?.post?.trusted === false && !is_admin) {
      if (data.post.user_id !== user.id) {
        navigate("/profile/my-posts")
      }
    }
    setPost(data.post)
    data.post?.questions.forEach((question) => {
      question.answers[0].checked = true
    })
    setQuestions(data.post?.questions)
  }, [data])

  const showConfirmer = () => {
    const version = {
      [post?.confirmer_id]: <Chip label={t("already_confirmed")} variant="outlined" />,
      [user?.id]: <Chip label={t("confirmed_by_yourself")} variant="outlined" />,
      null: (
        <BlueButton onClick={toConfirm}>
          {post?.type === "FOUND" ? t("It_is_mine") : t("I_found")}
        </BlueButton>
      ),
    }

    return version[post?.confirmer_id]
  }

  const sendAnswers = async (data) => {
    await api.post("messages/send-answers", data)
    navigate(`/chat/${post.user_id}`)
  }

  const toConfirm = async () => {
    try {
      const response = await api.patch(`/posts/confirmed/${id}`)
      console.log(response)
      if (response.status === 200) {
        setPost({ ...post, confirmer_id: user.id })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleAnswer = (e, questionIndex, answerIndex) => {
    questions[questionIndex].answers.forEach((answer) => {
      answer.checked = false
    })
    questions[questionIndex].answers[answerIndex].checked = e.target.checked
    setQuestions([...questions])
  }

  const handlePopupClose = () => {
    setOpen(false)
  }

  const handleStartChatButtonClick = async () => {
    if (!questions.length)
      await sendAnswers({
        post_title: post.name,
        user_id: +post.user_id,
        questions: [],
      })
    setOpen(true)
  }

  const toggleOpenEditPost = (open) => {
    setOpenEditPost(open)
  }

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`)
    navigate("/profile/my-posts")
  }

  return (
    <Container size="md">
      <Box
        sx={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {loading ? (
          <PostsSceletonSingle />
        ) : (
          <>
            <Card>
              <CardHeader
                avatar={<UserAvatar user={post?.user} />}
                title={getUserFullName(post?.user)}
                subheader={date}
                action={
                  <>
                    {post?.id === user?.id && (
                      <IconButton onClick={() => deletePost(post.id)}>
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </>
                }
              />
              <Divider />

              {post?.images.length > 0 ? (
                <Slider images={post?.images} />
              ) : (
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: 400,
                    minHeight: 250,
                    objectFit: "contain",
                    width: "100%",
                  }}
                  image={emptyImage}
                  alt="image"
                />
              )}
              <Divider />
              <CardContent>
                <Typography variant="h6" color="text.dark" mb={3} fontWeight="bold">
                  {post?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  {post?.description}
                </Typography>
                <Chip label={t(post?.category?.name)} variant="outlined" onClick={() => {}} />
              </CardContent>
              <Divider />
              <CardActions
                disableSpacing
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <HeartButton post={post} />
                {post?.user_id !== user?.id ? (
                  <>
                    {showConfirmer()}
                    <BlueButton onClick={handleStartChatButtonClick}>{t("Start_chat")}</BlueButton>
                  </>
                ) : (
                  <>
                    {" "}
                    <BlueButton onClick={() => toggleOpenEditPost(true)}>{t("Edit")}</BlueButton>
                  </>
                )}
              </CardActions>
            </Card>
          </>
        )}
      </Box>
      <PostPopup
        open={open}
        handleClose={handlePopupClose}
        title={"Answer the questions"}
        handleSubmit={() =>
          sendAnswers({
            post_title: post.name,
            user_id: +post.user_id,
            questions,
          })
        }
      >
        <Questions questions={questions} handleAnswer={handleAnswer} />
      </PostPopup>
    </Container>
  )
}

export default PostDetailed
