import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Button, Container, Grid, useTheme } from "@mui/material"
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined"
import PostsList from "../PostsList/PostsList"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import PostsSidebar from "../Shared/Sidebars/PostsSidebar/PostsSidebar"
import DefaultPagination from "../Shared/Pagination/DefaultPagination/DefaultPagination"
import { Search } from "../Shared/Search/Search"
import { useFetch } from "../../hooks/useFetch"
import { getParamsFromFiltering } from "./utils"

import { scrollToTop } from "../../helpers/utils"
import { POST_PER_PAGE } from "./constants"
import useStyles from "./styles"

const Posts = () => {
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
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }
  const theme = useTheme()
  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid item sx={{ backgroundColor: theme.palette.body, width: "100%", height: "100%" }}>
        <PostsSidebar
          open={open}
          toggleDrawer={toggleDrawer}
          handleCategoryChange={handleCategoryChange}
        />
        <Box
          mb={5}
          sx={{
            marginLeft: {
              sm: open ? "250px" : 0,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              alignSelf: "end",
              padding: "20px 15px 8px",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Search />
            <Button
              onClick={toggleDrawer(!open)}
              variant="contained"
              sx={{
                marginLeft: 3,
                height: "40px",
                fontSize: "14px !important",
                color: theme.palette.blueButton.textColor,
                backgroundColor: theme.palette.blueButton.main,
                "&:hover": {
                  backgroundColor: theme.palette.blueButton.hover,
                },
              }}
            >
              <FilterListOutlinedIcon sx={{ paddingRight: 1 }} /> Filter
            </Button>
          </Box>
          {loading ? <PostsSceleton /> : <PostsList data={posts} />}
          {!!pageCount && (
            <DefaultPagination onChange={handlePageClick} page={page} count={pageCount} />
          )}
        </Box>
      </Grid>
    </Container>
  )
}

export default Posts
