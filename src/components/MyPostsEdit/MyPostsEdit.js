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

export default function MyPostsEdit() {
  const classes = useStyles()
  const { id } = useParams()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [post, setPost] = useState({})
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [confirmerUser, setConfirmerUser] = useState(null)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { data: categoriesResponse } = useFetch("/categories")
  const { data: postResponse, reFetch: reFetchPost } = useFetch(`/posts/${id}`)

  useEffect(() => {
    setCategories(categoriesResponse.categories)
  }, [categoriesResponse])

  useEffect(() => {
    setPost(postResponse.post)
    setName(postResponse.post?.name)
    setType(postResponse.post?.type)
    setCategory(postResponse.post?.category_id)
    setDescription(postResponse.post?.description)
    setImages(postResponse.post?.images)
    setConfirmerUser(postResponse.post?.confirmer)
    console.log("Mypost useeffect")
  }, [postResponse])

  const deleteConfirmer = async () => {
    const res = await api.delete(`/posts/delete-confirmed/${id}`)
    console.log(res)
    reFetchPost()
    handleClose()
  }

  console.log(!post?.conpleted)
  console.log(post)

  const done = async () => {
    const res = await api.patch(`/posts/completed/${id}`)
    console.log(res)
    reFetchPost()
    navigate("/profile/my-posts")
  }

  const updatePost = async () => {
    const sendData = {
      name,
      description,
      category_id: category,
      type,
      // images,
    }

    const res = await api.put(`/posts/${id}`, sendData)
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="LOST">Lost</MenuItem>
                <MenuItem value="FOUND">Found</MenuItem>
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
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                value={category}
              >
                {categories &&
                  categories.map((cat) => {
                    return (
                      <MenuItem value={cat.id} key={cat.id}>
                        {cat.name}
                      </MenuItem>
                    )
                  })}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} display="flex">
              <UploadButtons />
            </Grid>
          </Grid>
          <Grid container spacing={2} p={2}>
            <Grid item xs={8} sm={6} md={4}>
              <GreenButton className={classes.button} type="button" onClick={updatePost}>
                Save Changes
              </GreenButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
