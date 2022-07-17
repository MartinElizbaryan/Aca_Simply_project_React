import React, { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { Button, Grid, IconButton, ListItemIcon } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EmailIcon from "@mui/icons-material/Email"
import DoneIcon from "@mui/icons-material/Done"
import api from "../../api/api"
import { updatePost } from "./utils"
import validationSchema from "./validationSchema"
import useStyles from "./styles"
import PostInfoFields from "../PostInfoFields/PostInfoFields"
import { useTranslation } from "react-i18next"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"

const EditPost = ({ open, toggleOpen, post }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  // const [post, setPost] = useState({})
  const [images, setImages] = useState(post.images)
  const [confirmerUser, setConfirmerUser] = useState(post.confirmerUser)
  const [deletedImages, setDeletedImages] = useState([])
  const [previewSource, setPreviewSource] = useState([])
  // const { data: postResponse, reFetch: reFetchPost } = useFetch(`/posts/${id}`)

  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      name: post.name,
      description: post.description,
      address: post.address,
      category_id: post.category_id,
      type: post.type,
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

  // useEffect(() => {
  //   // setPost(postResponse.post)
  //   formik.setFieldValue("name", post.name)
  //   formik.setFieldValue("type", post.type)
  //   formik.setFieldValue("category_id", post.category_id)
  //   formik.setFieldValue("description", post.description)
  //   formik.setFieldValue("address", post.address)
  //   // setImages(post.images)
  //   setConfirmerUser(post.confirmer)
  // }, [post])

  const deleteConfirmer = async () => {
    const res = await api.delete(`/posts/delete-confirmed/${id}`)
    // reFetchPost()
  }

  const done = async () => {
    const res = await api.patch(`/posts/completed/${id}`)
    // reFetchPost()
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
          {/*<Grid item xs={12}>*/}
          {/*  <Grid container spacing={2}>*/}
          {/*    {images &&*/}
          {/*      images.map((image, index) => (*/}
          {/*        <ImageCard key={index} index={index} image={image} removeImage={removeImage} />*/}
          {/*      ))}*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
        </Grid>
        <Button sx={{ display: "none" }} type="submit"></Button>
      </form>
    </PostPopup>
  )
}

export default EditPost
