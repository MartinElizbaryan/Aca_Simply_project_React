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
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material"
import Slider from "../Slider/Slider"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import PostsSceletonSingle from "../PostsSceletonSingle/PostsSceletonSingle"
import api from "../../api/api"
import { useFetch } from "../../hooks/useFetch"
import { getUserInfo } from "../../redux/userSelectors"
import emptyImage from "../../assets/adspy_loading_animation.gif"
import useStyles from "./styles"
import UserAvatar from "../Shared/Avatars/UserAvatar/UserAvatar"
import { getUserFullName } from "../../helpers/utils"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"

const PostSingle = () => {
  const [post, setPost] = useState({})
  const [questions, setQuestions] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const user = useSelector(getUserInfo)
  const { data, error, loading } = useFetch(`/posts/${id}/with-questions`)
  const classes = useStyles()

  const date = moment(post?.created_at).format("LLLL")

  useEffect(() => {
    setPost(data.post)
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
    console.log("good")
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

  const handelAnswer = (e, questionIndex, answerIndex) => {
    questions[questionIndex].answers.forEach((answer) => {
      answer.checked = false
    })
    questions[questionIndex].answers[answerIndex].checked = e.target.checked
    setQuestions([...questions])
  }
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

                  <Link url={`/chat/${post?.user_id}`}>
                    <BlueButton>{t("Start_chat")}</BlueButton>
                  </Link>
                </>
              )}
            </CardActions>
          </Card>
        </Box>
        <div>
          {questions?.map((question, questionIndex) => {
            return (
              <div key={question.id}>
                <p>{question.title}</p>

                <FormControl>
                  <RadioGroup name="radio-buttons-group">
                    {question.answers.map((answer, answerIndex) => {
                      return (
                        <FormControlLabel
                          key={answer.id}
                          value={answer.title}
                          control={<Radio />}
                          label={answer.title}
                          onChange={(e) => {
                            handelAnswer(e, questionIndex, answerIndex)
                          }}
                        />
                      )
                    })}
                  </RadioGroup>
                </FormControl>
              </div>
            )
          })}
        </div>
        <GreenButton onClick={sendAnswers}>{t("Send_Answers")}</GreenButton>
      </Container>
    )
}

export default withSuspenseAdding(PostSingle)
