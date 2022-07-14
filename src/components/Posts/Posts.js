import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Container, Grid } from "@mui/material"
import DefaultPagination from "../Shared/Pagination/DefaultPagination/DefaultPagination"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import PostsList from "../PostsList/PostsList"
import { useFetch } from "../../hooks/useFetch"
import { getParamsFromFiltering } from "./utils"
import { scrollToTop } from "../../helpers/utils"
import { POST_PER_PAGE } from "./constants"
import { colors } from "../../constants/styles"
import useStyles from "./styles"
import SidebarMobile from "../Shared/Sidebars/SidebarMobile/SidebarMobile"
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined"
import { BlueButton } from "../Shared/Buttons/BlueButton/BlueButton"

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
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid
        item
        xs={12}
        md={9}
        sx={{ backgroundColor: colors.grey, width: "100%", height: "100%" }}
      >
        <SidebarMobile open={open} toggleDrawer={toggleDrawer} />
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
          <BlueButton
            onClick={toggleDrawer(!open)}
            sx={{ alignSelf: "end", margin: 2, textTransform: "none" }}
          >
            <FilterListOutlinedIcon sx={{ paddingRight: 1 }} /> Search and Filter
          </BlueButton>
          {loading ? <PostsSceleton /> : <PostsList data={posts} />}
          {!!pageCount && (
            <DefaultPagination onChange={handlePageClick} page={page} count={pageCount} />
          )}
        </Box>
      </Grid>
    </Container>
  )
}
