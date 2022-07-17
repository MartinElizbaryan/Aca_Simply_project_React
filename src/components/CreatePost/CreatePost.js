import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useFormik } from "formik"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import Question from "../Shared/Questions/Question/Question"
import AddButton from "../Shared/Buttons/AddButton/AddButton"
import UploadInput from "../Shared/Inputs/UploadInput/UploadInput"
import { ImageCard } from "../Shared/Cards/ImageCard/ImageCard"
import { OutlinedInput } from "../Shared/Inputs/OutlinedInput/OutlinedInput"
import { validation } from "./validation"
import { useFetch } from "../../hooks/useFetch"
import { sendToServerHendler } from "./utils"
import useStyles from "./styles"

export default function CreatePost({ open, toggleOpen, ...props }) {
  const { t } = useTranslation()
  const { data } = useFetch("/categories")
  const [categories, setCategories] = useState([])
  const [previewSource, setPreviewSource] = useState([])
  const navigate = useNavigate()

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

  useEffect(() => {
    setCategories(data.categories)
  }, [data])

  const handleFileInputChange = (e) => {
    const files = e.target.files
    previewFile(files)
  }

  const handlePopupClose = () => {
    setPreviewSource([])
    formik.resetForm()
    toggleOpen(false)
  }

  const removeImage = (imageIndex) => {
    setPreviewSource((prevState) => {
      return prevState.filter((item, index) => {
        return index !== imageIndex
      })
    })
  }

  const previewFile = (files) => {
    for (const file of files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = () => {
        setPreviewSource((prevState) => {
          return [...prevState, reader.result]
        })
      }
    }
  }
  const addQuestionList = () => {
    formik.setFieldValue("questions", [...formik.values.questions, { title: "", answers: [] }])
  }

  window.formik = formik

  return (
    <Dialog open={open} onClose={handlePopupClose}>
      <DialogTitle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{t("Create_Post")}</Typography>
          <IconButton size="medium" onClick={handlePopupClose}>
            <CloseIcon color="action" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers={true}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} p={2} sx={{ marginTop: 0 }}>
            <Grid item xs={12}>
              <OutlinedInput
                label={t("Post_Title")}
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <OutlinedInput
                label={t("Type")}
                select
                name="type"
                onChange={formik.handleChange}
                value={formik.values.type}
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
              >
                {["LOST", "FOUND"].map((type) => {
                  return (
                    <MenuItem value={type} key={type}>
                      {type}
                    </MenuItem>
                  )
                })}
              </OutlinedInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <OutlinedInput
                label={t("Category")}
                select
                name="category_id"
                onChange={formik.handleChange}
                value={formik.values.category_id}
                error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                helperText={formik.touched.category_id && formik.errors.category_id}
              >
                {categories ? (
                  categories.map((category) => {
                    return (
                      <MenuItem value={category.id} key={category.id}>
                        {category.name}
                      </MenuItem>
                    )
                  })
                ) : (
                  <MenuItem value="none">None</MenuItem>
                )}
              </OutlinedInput>
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label={t("Address")}
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <OutlinedInput
                label={t("Description")}
                multiline
                minRows={5}
                maxRows={10}
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} display="flex">
              <UploadInput handleFileInputChange={handleFileInputChange} multipleUpload={true} />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                {previewSource.map((image, index) => (
                  <ImageCard key={index} index={index} image={image} removeImage={removeImage} />
                ))}
              </Grid>
            </Grid>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePopupClose}>{t("Cancel")}</Button>
        <Button onClick={formik.handleSubmit}>{t("Create")}</Button>
      </DialogActions>
    </Dialog>
  )
}
