import PostsList from "../Posts/PostsList/PostsList"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../Posts/PostsSceleton/PostsSceleton"

export default function ActivePosts() {
  const { data, error, loading } = useFetch("/posts?type=FIND")
  const [posts, setPosts] = useState([])
  useEffect(() => {
    ;(async function () {
      setPosts(data)
    })()
  }, [data])
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
      <Grid item xs={12} md={9}>
        <Box mt={5} mb={5}>
          {loading ? <PostsSceleton /> : <PostsList title="Active posts" data={posts} />}
        </Box>
      </Grid>
    </Grid>
  )
}
