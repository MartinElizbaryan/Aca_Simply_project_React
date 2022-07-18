import PostsList from "../PostsList/PostsList"
import Box from "@mui/material/Box"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import api from "../../api/api"

const FavoritePosts = () => {
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
    <Box>
      {loading ? (
        <PostsSceleton />
      ) : (
        <PostsList title="My posts" deleteFromMyFavorites={deleteFavorite} data={posts} />
      )}
    </Box>
  )
}

export default FavoritePosts
