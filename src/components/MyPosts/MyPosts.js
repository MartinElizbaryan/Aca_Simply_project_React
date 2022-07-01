import PostsList from "../PostsList/PostsList"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"

export default function Lost() {
  const { data, error, loading } = useFetch("/posts/my-posts")
  const [posts, setPosts] = useState([])

  console.log(posts)

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  return (
    <Grid container spacing={0} mt={10}>
      <SidebarCabinet />

      {/*<SidebarMobileCabinet />*/}

      <Grid item xs={12} md={9}>
        <Box mt={5} mb={5}>
          {loading ? <PostsSceleton /> : <PostsList title="My posts" data={posts} editable />}
        </Box>
      </Grid>
    </Grid>
  )
}
