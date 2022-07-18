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
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
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
import { AlertDialog } from "../Shared/Dialogs/AlertDialog/AlertDialog"
import EditPost from "../EditPost/EditPost"

const PostDetailed = () => {
  const [post, setPost] = useState({})
  const [openQuestions, setOpenQuestions] = useState(false)
  const [questions, setQuestions] = useState({})
  const [openEditPost, setOpenEditPost] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const user = useSelector(getUserInfo)
  const { data, error, loading } = useFetch(`/posts/${id}/with-questions`)

  const classes = useStyles()

  const date = moment(post?.created_at).format("LLLL")

  useEffect(() => {
    setPost(data.post || {})
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

  const handleQuestionsPopupClose = () => {
    setOpenQuestions(false)
  }

  const handleStartChatButtonClick = async () => {
    if (!questions.length)
      await sendAnswers({
        post_title: post.name,
        user_id: +post.user_id,
        questions: [],
      })
    setOpenQuestions(true)
  }

  const toggleOpenEditPost = (open) => {
    setOpenEditPost(open)
  }

  const deletePost = async () => {
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
                // action={
                //   <>
                //     {post?.id === user?.id && (
                //       <IconButton onClick={() => deletePost(post.id)}>
                //         <DeleteIcon />
                //       </IconButton>
                //     )}
                //   </>
                // }
              />
              <Divider />

              {post?.images?.length > 0 ? (
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
                    <BlueButton onClick={() => toggleOpenEditPost(true)}>{t("Edit")}</BlueButton>
                    <Button onClick={() => setOpenAlert(true)}>{t("Delete")}</Button>
                  </>
                )}
              </CardActions>
            </Card>
          </>
        )}
      </Box>
      <EditPost post={post} open={openEditPost} toggleOpen={toggleOpenEditPost} />
      <AlertDialog
        open={openAlert}
        title="Are you sure?"
        message="Your post will be delated. Are you sure you want to continue?"
        handleClose={() => setOpenAlert(false)}
        handleOk={deletePost}
      />
      <PostPopup
        open={openQuestions}
        handleClose={handleQuestionsPopupClose}
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
