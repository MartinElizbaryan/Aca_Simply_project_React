import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import PostsList from "../PostsList/PostsList"
import { useFetch } from "../../hooks/useFetch"

const PendingPosts = () => {
  const { data, error, loading, reFetch: reFetchMyPosts } = useFetch("/admin/posts/not-trusted")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  return (
    <Box mb={5}>
      {loading ? <PostsSceleton /> : <PostsList title="My posts" data={posts} admin={true} />}
    </Box>
  )
}
export default PendingPosts
