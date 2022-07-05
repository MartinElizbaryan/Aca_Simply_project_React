import PostsList from "../PostsList/PostsList"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useEffect, useMemo, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getParamsCustomVersion, getParamsFromFiltering } from "./utils"
import { POST_PER_PAGE } from "./constants"
import { scrollToTop } from "../../helpers/utils"
import { Container, Stack } from "@mui/material"
import useStyles from "./styles"
import Sidebar from "../Shared/Sidebars/Sidebar/Sidebar"
import DefaultPagination from "../Shared/Pagination/DefaultPagination/DefaultPagination"
import { colors } from "../../constants/styles"

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
    setPosts(data.posts)
    setPostsInDB(data.count)
  }, [data])
  return (
    <Container className={classes.container} maxWidth={false}>
      {/*<Typography variant="h4" className={classes.header}>*/}
      {/*  Posts*/}
      {/*</Typography>*/}
      <Stack>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            boxShadow: "4px 4px 20px rgb(0 0 0 / 20%)",
            height: "100%",
            width: "100%",
            position: "fixed",
            maxWidth: 300,
            backgroundColor: "white",
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
          {/*<SidebarMobile />*/}
        </Box>
        <Grid item xs={12} md={9} ml={{ md: "300px" }} sx={{ backgroundColor: colors.grey }}>
          <Box mt={5} mb={5}>
            {loading ? <PostsSceleton /> : <PostsList title="Posts" data={posts} />}
          </Box>
          {!!pageCount && <DefaultPagination onChange={pageClick} page={page} count={pageCount} />}
        </Grid>
      </Stack>
    </Container>
  )
}
