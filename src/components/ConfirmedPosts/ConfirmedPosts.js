import PostsList from "../PostsList/PostsList"
import Box from "@mui/material/Box"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"

export default function ConfirmedPosts() {
  const { data, error, loading } = useFetch("/posts/confirmed-posts")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  return <Box>{loading ? <PostsSceleton /> : <PostsList title="My posts" data={posts} />}</Box>
}
