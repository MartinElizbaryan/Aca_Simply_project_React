import FindPost from "../FindPost/FindPost"
import PostsList from "../Posts/PostsList/PostsList"
import Box from "@mui/material/Box"
import Counter from "../Counter/Counter"
import TeamSlider from "../TeamSlider/TeamSlider"
import { useEffect, useState } from "react"
import PostsSceleton from "../Posts/PostsSceleton/PostsSceleton"
import Typography from "@mui/material/Typography"
import useFetch from "../../hooks/useFetch"

export default function Home() {
  const { data, error, loading } = useFetch("/posts?take=3")
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts(data.posts)
  }, [data])
  return (
    <>
      <FindPost />
      <Box mt={5} mb={5}>
        {posts ? (
          loading ? (
            <PostsSceleton />
          ) : (
            <PostsList title="Top find Items" data={posts} />
          )
        ) : (
          <Typography variant="h5" textAlign="center">
            No Content found
          </Typography>
        )}
      </Box>
      <Box mt={5} mb={5}>
        <Counter />
      </Box>
      <Box mt={5}>
        <TeamSlider />
      </Box>
    </>
  )
}
