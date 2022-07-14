import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { IconButton, ListItemIcon, TextField } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import DoneIcon from "@mui/icons-material/Done"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import MenuItem from "@mui/material/MenuItem"
import UploadButtons from "../Shared/Inputs/UploadInput/UploadInput"
import { useFetch } from "../../hooks/useFetch"

import useStyles from "./style"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../../api/api"
import EmailIcon from "@mui/icons-material/Email"
import { useFormik } from "formik"
import CardMedia from "@mui/material/CardMedia"
import { IMAGE_BASE_URL } from "../../constants/cloudinary"
import { removeCurrentImage, removeImage, updatePost } from "./utilits"
import validationSchema from "./validationSchema"

export default function MyPostsEdit() {
  const classes = useStyles()
  const { id } = useParams()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [post, setPost] = useState({})
  const [images, setImages] = useState([])
  const [confirmerUser, setConfirmerUser] = useState(null)
  const [deletedImages, setDeletedImages] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [fileInputState, setFileInputState] = useState("")
  const [previewSource, setPreviewSource] = useState([])

  const { data: categoriesResponse } = useFetch("/categories")
  const { data: postResponse, reFetch: reFetchPost } = useFetch(`/posts/${id}`)
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      address: "",
      category_id: "",
      type: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(deletedImages)
      updatePost(post.id, navigate, values, deletedImages, previewSource)
    },
  })
  useEffect(() => {
    setCategories(categoriesResponse.categories)
  }, [categoriesResponse])
  const postTypes = [
    { name: "Lost", id: "LOST" },
    { name: "Found", id: "FOUND" },
  ]
  useEffect(() => {
    setPost(postResponse.post)
    formik.setFieldValue("name", postResponse.post?.name)
    formik.setFieldValue("type", postResponse.post?.type)
    formik.setFieldValue("category_id", postResponse.post?.category_id)
    formik.setFieldValue("description", postResponse.post?.description)
    formik.setFieldValue("address", postResponse.post?.address)
    setImages(postResponse.post?.images)
    setConfirmerUser(postResponse.post?.confirmer)
  }, [postResponse])

  const deleteConfirmer = async () => {
    const res = await api.delete(`/posts/delete-confirmed/${id}`)
    reFetchPost()
    handleClose()
  }

  const done = async () => {
    const res = await api.patch(`/posts/completed/${id}`)
    reFetchPost()
    navigate("/profile/my-posts")
  }
  console.log(images)

  const handleFileInputChange = (e) => {
    const files = e.target.files
    previewFile(files)
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

  return (
    <Box>
      {/*<MyPostsEditModal deleteConfirmer={deleteConfirmer} handleClose={handleClose} open={open} />*/}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} p={2}>
          {confirmerUser && (
            <Grid item xs={6} mb={5}>
              Confirmed By {confirmerUser.name} {confirmerUser.surname}
              <IconButton aria-label="delete" color="error" onClick={handleOpen}>
                <DeleteIcon />
              </IconButton>
              <Link to={`/chat/${confirmerUser.id}`}>
                <ListItemIcon>
                  <IconButton aria-label="delete" color="primary">
                    <EmailIcon />
                  </IconButton>
                </ListItemIcon>
              </Link>
              {!post?.completed && (
                <IconButton aria-label="delete" color="success" onClick={done}>
                  <DoneIcon />
                </IconButton>
              )}
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField
              className={classes.input}
              fullWidth
              label="Post Title"
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
              label="Address"
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
              label="Type"
              variant="outlined"
              size="normal"
              select
              onChange={formik.handleChange}
              value={formik.values.type}
              name="type"
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
              label="Category"
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
              label="Description"
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
              {images &&
                images.map((image, index) => {
                  return (
                    <Grid item xs={6} sm={3} key={index} textAlign={"center"}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={IMAGE_BASE_URL + image.src}
                        alt={IMAGE_BASE_URL + image.src}
                        sx={{
                          borderRadius: 5,
                        }}
                      />
                      <IconButton aria-label="delete" size="large">
                        <DeleteIcon
                          fontSize="inherit"
                          color="error"
                          onClick={(e) => {
                            removeCurrentImage({
                              setDeletedImages,
                              setImages,
                              image_index: index,
                              id: image.id,
                            })
                          }}
                        />
                      </IconButton>
                    </Grid>
                  )
                })}
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
                            removeImage({ setPreviewSource, image_index: index })
                          }}
                        />
                      </IconButton>
                    </Grid>
                  )
                })}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} p={2}>
          <Grid item xs={8} sm={6} md={4}>
            <GreenButton className={classes.button} type="submit">
              Save Changes
            </GreenButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
