import PostsList from "../PostsList/PostsList"
import Box from "@mui/material/Box"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import api from "../../api/api"

export default function Lost() {
  const { data, error, loading, reFetch: reFetchMyPosts } = useFetch("/posts/my-posts")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  const deletePost = async (id) => {
    const res = await api.delete(`/posts/${id}`)
    reFetchMyPosts()
  }

  return (
    <Box>
      {loading ? (
        <PostsSceleton />
      ) : (
        <PostsList title="My posts" data={posts} changeable editable deletePost={deletePost} />
      )}
    </Box>
  )
}
