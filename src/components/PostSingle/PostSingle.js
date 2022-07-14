import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

import { useEffect, useState } from "react"
import moment from "moment"
import useStyles from "./styles"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"
import PostsSceletonSingle from "../PostsSceletonSingle/PostsSceletonSingle"
import HeartButton from "../Shared/Buttons/HeartButton/HeartButton"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import { FormControl } from "@mui/material"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import Slider from "../Slider/Slider"
import emptyImage from "../../assets/adspy_loading_animation.gif"
// Import Slider styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import CardMedia from "@mui/material/CardMedia"
import api from "../../api/api"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { getUserInfo } from "../../redux/userSelectors"

export default function PostSingle() {
  const { t } = useTranslation()
  const auth = useSelector(getUserInfo)
  const classes = useStyles()
  const { id } = useParams()
  const [post, setPost] = useState({})
  const [questions, setQuestions] = useState({})
  const { data, error, loading } = useFetch(`/posts/${id}/with-questions`)
  const date = moment(post?.created_at).format("LLLL")
  const avatarInitials = `${post?.user?.name[0]}${post?.user?.surname[0]}`
  const navigate = useNavigate()
  useEffect(() => {
    setPost(data.post)
    setQuestions(data.post?.questions)
  }, [data])

  const showConfirmer = () => {
    const version = {
      [post?.confirmer_id]: <div>{t("already_confirmed")}</div>,
      [auth.id]: <div>{t("confirmed_by_yourself")}</div>,
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
        setPost({ ...post, confirmer_id: auth.id })
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
              avatar={
                <Avatar className={classes.avatar} aria-label="recipe">
                  {avatarInitials}
                </Avatar>
              }
              title={`${post?.user?.name} ${post?.user?.surname}`}
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
                alt={""}
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
              {post?.user_id != auth.id && (
                <>
                  {showConfirmer()}

                  <Link url="/chat/1" content={<BlueButton>{t("Start_chat")}</BlueButton>} />
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
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
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
