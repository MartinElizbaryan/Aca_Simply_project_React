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
  Container,
  Typography,
} from "@mui/material"
import Slider from "../Slider/Slider"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { Questions } from "../Shared/Dialogs/Questions/Questions"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import PostsSceletonSingle from "../PostsSceletonSingle/PostsSceletonSingle"
import api from "../../api/api"
import { useFetch } from "../../hooks/useFetch"
import { getUserInfo } from "../../redux/user/userSelectors"
import { getUserFullName } from "../../helpers/utils"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import useStyles from "./styles"

const PostDetailed = () => {
  const [post, setPost] = useState({})
  const [open, setOpen] = useState(false)
  const [questions, setQuestions] = useState({})
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector(getUserInfo)
  const { data, error, loading } = useFetch(`/posts/${id}/with-questions`)

  const classes = useStyles()

  const date = moment(post?.created_at).format("LLLL")

  useEffect(() => {
    setPost(data.post)
    data.post?.questions.forEach((question) => {
      question.answers[0].checked = true
    })
    setQuestions(data.post?.questions)
  }, [data])

  const showConfirmer = () => {
    const version = {
      [post?.confirmer_id]: <div>{t("already_confirmed")}</div>,
      [user.id]: <div>{t("confirmed_by_yourself")}</div>,
      null: (
        <BlueButton onClick={toConfirm}>
          {post?.type === "FOUND" ? t("It_is_mine") : t("I_found")}
        </BlueButton>
      ),
    }

    return version[post?.confirmer_id]
  }

  const sendAnswers = async () => {
    await api.post("messages/send-answers", {
      post_title: post.name,
      user_id: +post.user_id,
      questions,
    })
    navigate(`/chat/${post.user_id}`)
  }

  const toConfirm = async () => {
    try {
      const response = await api.patch(`/posts/confirmed/${id}`)
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

  const handleStartChatButtonClick = () => {
    console.log(questions.length)
    if (!questions.length) return
    setOpen(true)
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
              />
              {post?.images.length > 0 ? (
                <Slider images={post?.images} />
              ) : (
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: 500,
                    minHeight: 250,
                    objectFit: "contain",
                    width: "100%",
                  }}
                  image={emptyImage}
                  alt="image"
                />
              )}
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
                <HeartButton post={post} />
                {post?.user_id !== user.id && (
                  <>
                    {showConfirmer()}
                    <BlueButton onClick={handleStartChatButtonClick}>{t("Start_chat")}</BlueButton>
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
        handleSubmit={sendAnswers}
      >
        <Questions questions={questions} handleAnswer={handleAnswer} />
      </PostPopup>
    </Container>
  )
}

export default PostDetailed
