import PostsList from "../Posts/PostsList/PostsList"
import PostsSceleton from "../Posts/PostsSceleton/PostsSceleton"
import Sidebar from "../Shared/Sidebars/Sidebar/Sidebar"
import SidebarMobile from "../Shared/Sidebars/SidebarMobile/SidebarMobile"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useSearchParams } from "react-router-dom"

const getParamsCustomVersion = (params, ...toBeArray) => {
  const data = {}
  params.forEach((param) => {
    const key = param[0]
    const value = param[1]
    if (toBeArray.includes(param[0])) {
      if (key in data) {
        data[key].push(value)
      } else {
        data[key] = [value]
      }
    } else {
      data[key] = value
    }
  })

  return data
}

export default function Posts() {
  const [searchParams] = useSearchParams()
  // const params = Object.fromEntries([...searchParams])
  // console.log(params)

  const params = getParamsCustomVersion([...searchParams], "category")
  console.log(params)
  const { data, error, loading } = useFetch("/posts", { params })
  console.log(loading)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // console.log("effect")
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
            <Sidebar />
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
