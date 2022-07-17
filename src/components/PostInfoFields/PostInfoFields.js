import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Grid, MenuItem } from "@mui/material"
import { OutlinedInput } from "../Shared/Inputs/OutlinedInput/OutlinedInput"
import UploadInput from "../Shared/Inputs/UploadInput/UploadInput"
import { ImageCard } from "../Shared/Cards/ImageCard/ImageCard"
import { useFetch } from "../../hooks/useFetch"

export default function PostInfoFields({ formik, images, previewSource, setPreviewSource }) {
  const { t } = useTranslation()
  const { data } = useFetch("/categories")
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(data.categories)
  }, [data])

  const removeImage = (imageIndex) => {
    setPreviewSource((prevState) => {
      return prevState.filter((item, index) => {
        return index !== imageIndex
      })
    })
  }

  const handleFileInputChange = (e) => {
    const files = e.target.files
    previewFile(files)
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

  return (
    <>
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
          {images &&
            images.map((image, index) => (
              <ImageCard key={index} index={index} image={image} removeImage={removeImage} />
            ))}
          {previewSource.map((image, index) => (
            <ImageCard key={index} index={index} image={image} removeImage={removeImage} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
