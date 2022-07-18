import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { Button, Chip, Grid } from "@mui/material"
import api from "../../api/api"
import { updatePost } from "./utils"
import validationSchema from "./validationSchema"
import useStyles from "./styles"
import PostInfoFields from "../PostInfoFields/PostInfoFields"
import { useTranslation } from "react-i18next"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"
import { getUserFullName } from "../../helpers/utils"

const EditPost = ({ open, toggleOpen, post }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [images, setImages] = useState(post.images)
  const [confirmer, setConfirmer] = useState(post.confirmer)
  const [deletedImages, setDeletedImages] = useState([])
  const [previewSource, setPreviewSource] = useState([])

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
  console.log(post)
  const handlePopupClose = () => {
    setPreviewSource([])
    formik.resetForm()
    toggleOpen(false)
  }

  const removeCurrentImage = (imageIndex) => {
    setDeletedImages((prevState) => {
      return [...prevState, { id: images[imageIndex].id }]
    })
    setImages((prevState) => {
      return [
        ...prevState.filter((item, index) => {
          return index !== imageIndex
        }),
      ]
    })
  }

  const deleteConfirmer = async () => {
    const res = await api.delete(`/posts/delete-confirmed/${post.id}`)
    setConfirmer(null)
  }

  const changeCompleted = async () => {
    const res = await api.patch(`/posts/completed/${post.id}`)
    navigate("/profile/my-posts")
  }

  const deletePost = async () => {
    await api.delete(`/posts/${post.id}`)
    navigate("/profile/my-posts")
  }

  return (
    <PostPopup
      open={open}
      handleClose={handlePopupClose}
      handleSubmit={formik.handleSubmit}
      title={t("Edit")}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} p={2}>
          {confirmer && (
            <Grid item xs={12} mb={3} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Chip
                label={`Confirmed By ${getUserFullName(confirmer)}`}
                variant="outlined"
                onDelete={deleteConfirmer}
              />
              {!post.completed && (
                <Chip
                  label={"Complete"}
                  variant="outlined"
                  icon={<TaskAltIcon />}
                  onClick={changeCompleted}
                />
              )}
            </Grid>
          )}
          <PostInfoFields
            formik={formik}
            setPreviewSource={setPreviewSource}
            previewSource={previewSource}
            removeCurrentImage={removeCurrentImage}
            images={images}
          />
        </Grid>
        <Button sx={{ display: "none" }} type="submit"></Button>
      </form>
    </PostPopup>
  )
}

export default EditPost
