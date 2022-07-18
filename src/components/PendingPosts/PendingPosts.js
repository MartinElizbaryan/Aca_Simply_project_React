import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import api from "../../api/api"
import Box from "@mui/material/Box"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import PostsList from "../PostsList/PostsList"

const PendingPosts = () => {
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
    <Box mb={5}>
      {loading ? (
        <PostsSceleton />
      ) : (
        <PostsList
          title="My posts"
          data={posts}
          deletePost={deletePost}
          trustPost={trustPost}
          admin={true}
        />
      )}
    </Box>
  )
}
export default PendingPosts
