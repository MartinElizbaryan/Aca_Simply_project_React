import FindPost from "../FindPost/FindPost"
import PostsList from "../PostsList/PostsList"
import Box from "@mui/material/Box"
import Counter from "../Counter/Counter"
import Steps from "../Steps/Steps"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import Typography from "@mui/material/Typography"
import { useFetch } from "../../hooks/useFetch"
import { useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { data, error, loading } = useFetch("/posts?take=6")
  const [posts, setPosts] = useState([])
  const { t } = useTranslation()

  const theme = useTheme()

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
            Sorry! There are no posts to show you.
          </Typography>
        )}
      </Box>
      <Box mt={5} mb={5}>
        <Counter />
      </Box>
      <Box mt={5}>
        <Steps />
      </Box>
    </>
  )
}

export default Home
