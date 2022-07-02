import PostsList from "../PostsList/PostsList"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import Sidebar from "../Shared/Sidebars/Sidebar/Sidebar"
import SidebarMobile from "../Shared/Sidebars/SidebarMobile/SidebarMobile"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { useEffect, useMemo, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useSearchParams } from "react-router-dom"
import { getParamsCustomVersion, getParamsFromFiltering } from "./utils"

export default function Posts() {
  const [searchParams] = useSearchParams()
  const [isChecked, setIsChecked] = useState({})

  const filterParams = useMemo(() => {
    return getParamsFromFiltering(isChecked)
  }, [isChecked])

  const config = useMemo(
    () => ({
      params: getParamsCustomVersion([...searchParams, ...filterParams], "category"),
    }),
    [searchParams, filterParams]
  )
  const { data, error, loading, reFetch: reFetchPosts } = useFetch("/posts", "get", config)
  const [posts, setPosts] = useState([])

  // const location = useLocation()
  // const query = new URLSearchParams(location.search)
  // const page = parseInt(query.get("page") || "1", 10)

  // const pageClick = (event, page) => {
  //   console.log("pageClick")
  // }
  //
  useEffect(() => {
    reFetchPosts()
  }, [searchParams])

  const onOff = (e, id) => {
    console.log(2222222222)
    setIsChecked({
      ...isChecked,
      [id]: e.target.checked,
    })
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

        {/*<BasicPagination onChange={pageClick} page={page} count={posts?.length / POST_PER_PAGE} />*/}
      </Grid>
    </Grid>
  )
}
