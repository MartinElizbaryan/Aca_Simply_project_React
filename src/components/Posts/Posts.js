import PostsList from "../PostsList/PostsList"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useEffect, useMemo, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getParamsCustomVersion, getParamsFromFiltering } from "./utils"
import BasicPagination from "../Shared/Pagination/DefaultPagination/DefaultPagination"
import { POST_PER_PAGE } from "./constants"
import { scrollToTop } from "../../helpers/utils"
import { Container, Typography } from "@mui/material"
import useStyles from "./styles"

export default function Posts() {
  const [searchParams] = useSearchParams()
  const [isChecked, setIsChecked] = useState({})
  const filterParams = useMemo(() => {
    return getParamsFromFiltering(isChecked)
  }, [isChecked])
  const config = useMemo(
    () => ({
      params: getParamsCustomVersion(
        [...searchParams, ...filterParams, ["take", POST_PER_PAGE]],
        "category"
      ),
    }),
    [searchParams, filterParams]
  )
  const { data, error, loading, reFetch: reFetchPosts } = useFetch("/posts", "get", config)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [postsInDB, setPostsInDB] = useState(0)
  const pageCount = Math.ceil(postsInDB / POST_PER_PAGE)
  const classes = useStyles()

  // const location = useLocation()
  // const query = new URLSearchParams(location.search)
  // const page = parseInt(query.get("page") || "1", 10)

  const navigate = useNavigate()
  const pageClick = (event, value) => {
    setPage(value)
    let link = "/posts?"
    ;[...searchParams].forEach((search) => {
      if (search[0] === "page") return

      link += `${search[0]}=${search[1]}&`
    })

    link += `page=${value}`

    navigate(link)
    scrollToTop()
  }

  useEffect(() => {
    setPage(+config.params.page || 1)
  }, [searchParams])

  const onOff = (e, id) => {
    setIsChecked({
      ...isChecked,
      [id]: e.target.checked,
    })
  }

  useEffect(() => {
    console.log(data)
    setPosts(data.posts)
    setPostsInDB(data.count)
  }, [data])

  return (
    // <Grid container spacing={0} mt={10}>
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.header}>
        Contact us
      </Typography>
      {/*<Grid*/}
      {/*  item*/}
      {/*  xs={12}*/}
      {/*  md={3}*/}
      {/*  mt={11}*/}
      {/*  sx={{*/}
      {/*    padding: 2,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Paper elevation={2}>*/}
      {/*    <Box*/}
      {/*      sx={{*/}
      {/*        display: {*/}
      {/*          xs: "none",*/}
      {/*          md: "block",*/}
      {/*        },*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <Sidebar isChecked={isChecked} onOff={onOff} />*/}
      {/*    </Box>*/}
      {/*    <Box*/}
      {/*      sx={{*/}
      {/*        display: {*/}
      {/*          xs: "block",*/}
      {/*          md: "none",*/}
      {/*        },*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <SidebarMobile />*/}
      {/*    </Box>*/}
      {/*  </Paper>*/}
      {/*</Grid>*/}
      <Grid item xs={12} md={9}>
        <Box mt={5} mb={5}>
          {loading ? <PostsSceleton /> : <PostsList title="Posts" data={posts} />}
        </Box>
        {pageCount && <BasicPagination onChange={pageClick} page={page} count={pageCount} />}
      </Grid>
    </Container>
  )
}
