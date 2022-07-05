import { useEffect, useState } from "react"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { IconButton, ListItemIcon, TextField } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import DoneIcon from "@mui/icons-material/Done"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import MenuItem from "@mui/material/MenuItem"
import UploadButtons from "../Shared/Inputs/Upload"
import useFetch from "../../hooks/useFetch"
import useStyles from "./style"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../../api/api"
import EmailIcon from "@mui/icons-material/Email"
import MyPostsEditModal from "../MyPostsEditModal/MyPostsEditModal"
import * as yup from "yup"
import { useFormik } from "formik"

export default function MyPostsEdit() {
  const validationSchema = yup.object().shape({
    name: yup
      .string("Enter Title")
      .min(3, "Title should be of minimum 3 characters length")
      .max(50, "Title should be of maximum 50 characters length")
      .required("Title is required"),
    address: yup
      .string("Enter Address")
      .min(4, "Address should be of minimum 4 characters length")
      .max(50, "Address should be of maximum 50 characters length")
      .required("Address is required"),
    description: yup
      .string("Enter Description")
      .min(3, "Description should be of minimum 50 characters length")
      .required("Description is required"),
    category_id: yup.string("Enter Category").required("Category is required"),
    type: yup.string("Enter Type").required("Type is required"),
  })
  const classes = useStyles()
  const { id } = useParams()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [post, setPost] = useState({})
  const [images, setImages] = useState([])
  const [confirmerUser, setConfirmerUser] = useState(null)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { data: categoriesResponse } = useFetch("/categories")
  const { data: postResponse, reFetch: reFetchPost } = useFetch(`/posts/${id}`)
  const updatePost = async (values) => {
    const sendData = {
      ...values,
      // images,
    }

    const res = await api.put(`/posts/${id}`, sendData)
    console.log(res)
    navigate("/profile/my-posts")
  }
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
      console.log(values)
      updatePost(values)
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
  return (
    <Grid container spacing={0} mt={10}>
      <MyPostsEditModal deleteConfirmer={deleteConfirmer} handleClose={handleClose} open={open} />
      <Grid
        item
        xs={12}
        md={3}
        mt={11}
        sx={{
          padding: 2,
        }}
      >
        <Paper elevation={2}>
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
        </Paper>
      </Grid>
      <Grid item xs={12} md={9} mt={6}>
        <form onSubmit={formik.handleSubmit}>
          <Box mt={5} mb={5}>
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
                <UploadButtons />
              </Grid>
            </Grid>
            <Grid container spacing={2} p={2}>
              <Grid item xs={8} sm={6} md={4}>
                <GreenButton className={classes.button} type="submit" title={"Save Changes"} />
              </Grid>
            </Grid>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}
