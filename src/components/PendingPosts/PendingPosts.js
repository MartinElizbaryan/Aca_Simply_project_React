import { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import { useFetch } from "../../hooks/useFetch"
import api from "../../api/api"
import Box from "@mui/material/Box"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import PostsList from "../PostsList/PostsList"

export default function PendingPosts() {
  const { data, error, loading, reFetch: reFetchMyPosts } = useFetch("/admin/posts/not-trusted")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  const deletePost = async (id) => {
    const res = await api.delete(`/posts/${id}`)
    reFetchMyPosts()
  }

  const trustPost = async (id) => {
    const res = await api.patch(`/admin/posts/trusted/${id}`)
    reFetchMyPosts()
  }

  return (
    <Grid container spacing={0} mt={10}>
      <SidebarCabinet />

      {/*<SidebarMobileCabinet />*/}

      <Grid item xs={12} md={9}>
        <Box mt={5} mb={5}>
          {loading ? (
            <PostsSceleton />
          ) : (
            <PostsList
              title="My posts"
              data={posts}
              changeable
              admin
              deletePost={deletePost}
              trustPost={trustPost}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  )
}
