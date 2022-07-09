import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendToServerHendler } from "./utilits"
// MUI Components
import { Box, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material"
//Custom Components
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import Question from "../Shared/Questions/Question/Question"
import UploadButtons from "../Shared/Inputs/Upload"
import AddButton from "../Shared/Buttons/AddButton/AddButton"
// Styles
import useStyles from "./style"
//Form Validation
import { useFormik } from "formik"
import { validationSchema } from "./validationSchema"
import { useFetch } from "../../hooks/useFetch"
import CardMedia from "@mui/material/CardMedia"
import DeleteIcon from "@mui/icons-material/Delete"
import { useTranslation } from "react-i18next"

export default function CreatePost() {
  const { t } = useTranslation()
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category_id: "",
      type: "",
      address: "",
      questions: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await sendToServerHendler(values, previewSource)
      navigate("/profile/my-posts")
    },
  })
  // Styles
  const classes = useStyles()
  // Categories and Post Types
  const [categories, setCategories] = useState([])
  const postTypes = [
    { name: "Lost", id: "LOST" },
    { name: "Found", id: "FOUND" },
  ]
  const { data } = useFetch("/categories")
  useEffect(() => {
    setCategories(data.categories)
  }, [data])
  //File Uploader
  const [fileInputState, setFileInputState] = useState("")
  const [previewSource, setPreviewSource] = useState([])

  const handleFileInputChange = (e) => {
    const files = e.target.files
    previewFile(files)
  }
  const removeImage = (image_index) => {
    setPreviewSource((prevState) => {
      return [
        ...prevState.filter((item, index) => {
          return index !== image_index
        }),
      ]
    })
  }
  const previewFile = (files) => {
    for (const file of files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = () => {
        console.log(reader.result)
        setPreviewSource((prevState) => {
          return [...prevState, reader.result]
        })
      }
    }
  }
  // Handlers
  const addQuestionList = () => {
    formik.setFieldValue("questions", [...formik.values.questions, { title: "", answers: [] }])
  }
  // Formik - Validation and Submit
  const navigate = useNavigate()
  window.formik = formik
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={0} mt={1}>
        <Grid
          item
          xs={12}
          md={3}
          mt={11}
          sx={{
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <SidebarCabinet />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <SidebarMobileCabinet />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            marginTop: {
              xs: 0,
              md: 6,
            },
          }}
        >
          <Box
            mt={5}
            sx={{
              marginTop: {
                xs: 0,
                md: 5,
              },
            }}
          >
            <Grid container spacing={2} p={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label={t("Post_Title")}
                  variant="outlined"
                  size="normal"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label={t("Address")}
                  variant="outlined"
                  size="normal"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label={t("Post_Type")}
                  variant="outlined"
                  size="normal"
                  select
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                  error={formik.touched.type && Boolean(formik.errors.type)}
                  helperText={formik.touched.type && formik.errors.type}
                >
                  {postTypes ? (
                    postTypes.map((type) => {
                      return (
                        <MenuItem value={type.id} key={type.id}>
                          {type.name}
                        </MenuItem>
                      )
                    })
                  ) : (
                    <MenuItem value="none">None</MenuItem>
                  )}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label={t("Categories")}
                  variant="outlined"
                  size="normal"
                  select
                  name="category_id"
                  onChange={formik.handleChange}
                  value={formik.values.category_id}
                  error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                  helperText={formik.touched.category_id && formik.errors.category_id}
                >
                  {categories ? (
                    categories.map((cat) => {
                      return (
                        <MenuItem value={cat.id} key={cat.id}>
                          {cat.name}
                        </MenuItem>
                      )
                    })
                  ) : (
                    <MenuItem value="none">None</MenuItem>
                  )}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  fullWidth
                  label={t("Description")}
                  variant="outlined"
                  size="normal"
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
                <UploadButtons
                  handleFileInputChange={handleFileInputChange}
                  fileInputState={fileInputState}
                  multipleUpload={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {previewSource &&
                    previewSource.map((image, index) => {
                      return (
                        <Grid item xs={6} sm={3} key={index} textAlign={"center"}>
                          <CardMedia
                            component="img"
                            height="200"
                            image={image}
                            alt={image}
                            sx={{
                              borderRadius: 5,
                            }}
                          />
                          <IconButton aria-label="delete" size="large">
                            <DeleteIcon
                              fontSize="inherit"
                              color="error"
                              onClick={(e) => {
                                removeImage(index)
                              }}
                            />
                          </IconButton>
                        </Grid>
                      )
                    })}
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={12} display="flex" alignItems="center">
                <AddButton onClick={addQuestionList} />{" "}
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
            <Grid container spacing={2} p={2}>
              <Grid item xs={8} sm={6} md={4}>
                <GreenButton className={classes.button} type="submit">
                  {t("Save_Changes")}
                </GreenButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
