import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { Button, Grid, IconButton, ListItemIcon } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EmailIcon from "@mui/icons-material/Email"
import CardMedia from "@mui/material/CardMedia"
import DoneIcon from "@mui/icons-material/Done"
import api from "../../api/api"
import { useFetch } from "../../hooks/useFetch"
import { removeCurrentImage, updatePost } from "./utils"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"
import validationSchema from "./validationSchema"
import { CLOUDINARY_BASE_URL } from "../../constants/constants"
import useStyles from "./styles"
import PostInfoFields from "../PostInfoFields/PostInfoFields"
import { useTranslation } from "react-i18next"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"

const PostEdit = ({ open, toggleOpen }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [post, setPost] = useState({})
  const [images, setImages] = useState([])
  const [confirmerUser, setConfirmerUser] = useState(null)
  const [deletedImages, setDeletedImages] = useState([])
  const [previewSource, setPreviewSource] = useState([])
  const { data: postResponse, reFetch: reFetchPost } = useFetch(`/posts/${id}`)

  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      address: "",
      category_id: "",
      type: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await updatePost(post.id, navigate, values, deletedImages, previewSource)
    },
  })

  const handlePopupClose = () => {
    setPreviewSource([])
    formik.resetForm()
    toggleOpen(false)
  }

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
  }

  const done = async () => {
    const res = await api.patch(`/posts/completed/${id}`)
    reFetchPost()
    navigate("/profile/my-posts")
  }

  return (
    <PostPopup
      open={open}
      handleClose={handlePopupClose}
      handleSubmit={formik.handleSubmit}
      title={t("Edit_Post")}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} p={2}>
          {confirmerUser && (
            <Grid item xs={6} mb={5}>
              Confirmed By {confirmerUser.name} {confirmerUser.surname}
              <IconButton color="error" onClick={deleteConfirmer}>
                <DeleteIcon />
              </IconButton>
              <Link to={`/chat/${confirmerUser.id}`}>
                <ListItemIcon>
                  <IconButton color="primary">
                    <EmailIcon />
                  </IconButton>
                </ListItemIcon>
              </Link>
              {!post?.completed && (
                <IconButton color="success" onClick={done}>
                  <DoneIcon />
                </IconButton>
              )}
            </Grid>
          )}
          <PostInfoFields
            formik={formik}
            setPreviewSource={setPreviewSource}
            previewSource={previewSource}
          />
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {images &&
                images.map((image, index) => {
                  return (
                    <Grid item xs={6} sm={3} key={index} textAlign={"center"}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={CLOUDINARY_BASE_URL + image.src}
                        alt={CLOUDINARY_BASE_URL + image.src}
                        sx={{
                          borderRadius: 5,
                        }}
                      />
                      <IconButton size="large">
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
            </Grid>
          </Grid>
        </Grid>
        <Button sx={{ display: "none" }} type="submit"></Button>
      </form>
    </PostPopup>
  )
}

export default withSuspenseAdding(PostEdit)
