import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Container, Grid, Stack } from "@mui/material"
import DefaultPagination from "../Shared/Pagination/DefaultPagination/DefaultPagination"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import Sidebar from "../Shared/Sidebars/Sidebar/Sidebar"
import PostsList from "../PostsList/PostsList"
import { useFetch } from "../../hooks/useFetch"
import { getParamsFromFiltering } from "./utils"
import { scrollToTop } from "../../helpers/utils"
import { POST_PER_PAGE } from "./constants"
import { colors } from "../../constants/styles"
import useStyles from "./styles"

export default function Posts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [categories, setCategories] = useState({})

  const config = useMemo(
    () => ({
      params: {
        ...Object.fromEntries([...searchParams]),
        ...getParamsFromFiltering(categories),
        take: POST_PER_PAGE,
      },
    }),
    [searchParams, categories]
  )
  const { data, error, loading } = useFetch("/posts", "get", config)
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])
  const [postsInDB, setPostsInDB] = useState(0)
  const pageCount = Math.ceil(postsInDB / POST_PER_PAGE)
  const classes = useStyles()

  useEffect(() => {
    setPage(+config.params.page || 1)
  }, [searchParams])

  useEffect(() => {
    setPosts(data.posts)
    setPostsInDB(data.count)
  }, [data])

  const handlePageClick = (e, value) => {
    setPage(value)
    searchParams.set("page", value)
    setSearchParams(searchParams)
    scrollToTop()
  }

  const handleCategoryChange = (e, id) => {
    setCategories({
      ...categories,
      [id]: e.target.checked,
    })
  }

  return (
    <Container className={classes.container} maxWidth={false}>
      <Stack direction="row">
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          className={classes.sidebar}
        >
          <Sidebar handleCategoryChange={handleCategoryChange} />
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
        <Grid item xs={12} md={9} sx={{ backgroundColor: colors.grey, width: "100%" }}>
          <Box mt={5} mb={5}>
            {loading ? <PostsSceleton /> : <PostsList title="Posts" data={posts} />}
          </Box>
          {!!pageCount && (
            <DefaultPagination onChange={handlePageClick} page={page} count={pageCount} />
          )}
        </Grid>
      </Stack>
    </Container>
  )
}
