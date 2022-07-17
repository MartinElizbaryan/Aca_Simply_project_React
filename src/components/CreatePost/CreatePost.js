import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useFormik } from "formik"
import { Button, Grid, Typography } from "@mui/material"
import PostInfoFields from "../PostInfoFields/PostInfoFields"
import Question from "../Shared/Questions/Question/Question"
import AddButton from "../Shared/Buttons/AddButton/AddButton"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"
import { validation } from "./validation"
import { sendToServerHendler } from "./utils"
import useStyles from "./styles"

export default function CreatePost({ toggleOpen }) {
  const [previewSource, setPreviewSource] = useState([])
  const navigate = useNavigate()
  const { t } = useTranslation()

  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category_id: "",
      type: "",
      address: "",
      questions: [],
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      await sendToServerHendler(values, previewSource)
      toggleOpen(false)
      navigate("/profile/my-posts")
    },
  })

  const handlePopupClose = () => {
    setPreviewSource([])
    formik.resetForm()
    toggleOpen(false)
  }

  const addQuestionList = () => {
    formik.setFieldValue("questions", [...formik.values.questions, { title: "", answers: [] }])
  }

  return (
    <PostPopup
      handleClose={handlePopupClose}
      handleSubmit={formik.handleSubmit}
      title={t("Create_Post")}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} p={2} sx={{ marginTop: 0 }}>
          <PostInfoFields
            formik={formik}
            setPreviewSource={setPreviewSource}
            previewSource={previewSource}
          />
          <Grid item xs={12} md={6} lg={12} alignItems="center">
            <AddButton onClick={addQuestionList} />
            <Typography variant="span" ml={3}>
              {t("Add_Question")}
            </Typography>
          </Grid>
        </Grid>
        {!!formik.values.questions &&
          formik.values.questions.map((question, index) => {
            return (
              <Question key={index} questionIndex={index} question={question} formik={formik} />
            )
          })}
        <Button sx={{ display: "none" }} type="submit"></Button>
      </form>
    </PostPopup>
  )
}
