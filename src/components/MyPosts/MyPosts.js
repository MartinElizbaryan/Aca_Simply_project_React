import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import PostsList from "../PostsList/PostsList"
import { useFetch } from "../../hooks/useFetch"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import api from "../../api/api"

const MyPost = () => {
  const { data, error, loading, reFetch: reFetchMyPosts } = useFetch("/posts/my-posts")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`)
    reFetchMyPosts()
  }

  return (
    <Box>
      {loading ? (
        <PostsSceleton />
      ) : (
        <PostsList data={posts} editable changeable deletePost={deletePost} />
      )}
    </Box>
  )
}

export default MyPost
