import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useFormik } from "formik"
import { Button, Chip, Grid } from "@mui/material"
import PostInfoFields from "../PostInfoFields/PostInfoFields"
import { PostPopup } from "../Shared/Dialogs/PostPopup/PostPopup"
import api from "../../api/api"
import { updatePost } from "./utils"
import validationSchema from "./validationSchema"
import { getUserFullName } from "../../helpers/utils"
import useStyles from "./styles"

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
    enableReinitialize: true,
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
