import PostsList from "../PostsList/PostsList"
import Box from "@mui/material/Box"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import PostsSceleton from "../PostsSceleton/PostsSceleton"
import api from "../../api/api"
import { useDispatch } from "react-redux"
import { setIsLoading } from "../../redux/loading/loadingSlice"

const FavoritePosts = () => {
  const dispatch = useDispatch()
  const { data, error, loading, reFetch: reFetchFavorites } = useFetch("/posts/favorites")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(data.posts)
  }, [data])

  const deleteFavorite = async (id) => {
    dispatch(setIsLoading())
    await api.delete(`/favorites/${id}`)
    dispatch(setIsLoading())
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
