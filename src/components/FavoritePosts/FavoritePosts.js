import PostsList from "../PostsList/PostsList"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import api from "../../api/api"

export default function FavoritePosts() {
  const { data, error, loading, reFetch: reFetchFavorites } = useFetch("/posts/favorites")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  const deleteFavorite = async (id) => {
    console.log("delete")
    console.log(`/favorites/${id}`)
    await api.delete(`/favorites/${id}`)
    reFetchFavorites()
  }

  // const { favorites: posts } = useSelector((state) => state.user.info)
  // console.log("FavoritesPosts", setIsChanged)

  // useEffect(() => {
  //   setPosts(data.posts)
  // }, [data, changed])

  return (
    <Grid container spacing={0} mt={10}>
      <SidebarCabinet />

      {/*<SidebarMobileCabinet />*/}

      <Grid item xs={12} md={9}>
        <Box mt={5} mb={5}>
          {loading ? (
            <PostsSceleton />
          ) : (
            <PostsList title="My posts" deleteFromMyFavorites={deleteFavorite} data={posts} />
          )}
        </Box>
      </Grid>
    </Grid>
  )
}
