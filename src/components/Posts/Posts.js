import PostsList from "../PostsList/PostsList"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import Sidebar from "../Shared/Sidebars/Sidebar/Sidebar"
import SidebarMobile from "../Shared/Sidebars/SidebarMobile/SidebarMobile"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useSearchParams } from "react-router-dom"
import { getParamsCustomVersion, getParamsFromFiltering } from "./utils"

export default function Posts() {
  const [searchParams] = useSearchParams()
  const [isChecked, setIsChecked] = useState({})
  const filterParams = getParamsFromFiltering(isChecked)
  const params = getParamsCustomVersion([...searchParams, ...filterParams], "category")
  const { data, error, loading, reCall: reCallPosts } = useFetch("/posts", "get", { params })
  const [posts, setPosts] = useState([])

  useEffect(() => {
    reCallPosts()
  }, [searchParams])

  const onOff = (e, id) => {
    setIsChecked({
      ...isChecked,
      [id]: e.target.checked,
    })
    reCallPosts()
  }

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  return (
    <Grid container spacing={0} mt={10}>
      <Grid
        item
        xs={12}
        md={3}
        mt={11}
        sx={{
          padding: 2,
        }}
      >
        <Paper elevation={2}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Sidebar isChecked={isChecked} onOff={onOff} />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <SidebarMobile />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box mt={5} mb={5}>
          {loading ? <PostsSceleton /> : <PostsList title="Posts" data={posts} />}
        </Box>
      </Grid>
    </Grid>
  )
}
