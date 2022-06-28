import { useEffect, useState } from "react"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { TextField } from "@mui/material"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import MenuItem from "@mui/material/MenuItem"
import UploadButtons from "../Shared/Inputs/Upload"
import useFetch from "../../hooks/useFetch"
import useStyles from "./style"
import { useParams } from "react-router-dom"
import api from "../../api/api"

export default function CreatePost() {
  const classes = useStyles()
  const { id } = useParams()
  const [categories, setCategories] = useState([])
  const [post, setPost] = useState({})
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const { data: categoriesResponse } = useFetch("/categories")
  const { data: postResponse } = useFetch(`/posts/${id}`)

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
  }, [postResponse])

  console.log(post?.images)

  const updatePost = async () => {
    const sendData = {
      name,
      description,
      category_id: category,
      type,
      // images,
    }

    console.log(sendData)

    const res = await api.put(`/posts/${id}`, sendData)

    console.log(res)
  }

  return (
    <Grid container spacing={0} mt={10}>
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
