import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import PostsList from "../PostsList/PostsList"
import { useFetch } from "../../hooks/useFetch"
import PostsSceleton from "../PostsSceleton/PostsSceleton"

const MyPost = () => {
  const { data, error, loading, reFetch: reFetchMyPosts } = useFetch("/posts/my-posts")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  return <Box>{loading ? <PostsSceleton /> : <PostsList data={posts} editable />}</Box>
}

export default MyPost
