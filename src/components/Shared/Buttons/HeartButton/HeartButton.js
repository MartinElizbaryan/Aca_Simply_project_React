import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from "@mui/icons-material/Favorite"
import api from "../../../../api/api"

export default function HeartButton({ post, deleteFromMyFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsFavorite(post?.favorites?.length ? true : false)
  }, [post])

  const fn = () => {
    if (deleteFromMyFavorites) {
      deleteFromMyFavorites(post.id)
      return
    }
    isFavorite ? removeFavorite() : addFavorite()
    // if (!setIsChanged) return
    //
    // setIsChanged((prevState) => {
    //   console.log(prevState)
    //   return Math.random()
    // })
  }

  const addFavorite = async () => {
    try {
      await api.post(`/favorites/${post.id}`)
      setIsFavorite(true)
    } catch (error) {
      console.log(error)
    }
  }

  const removeFavorite = async () => {
    try {
      await api.delete(`/favorites/${post?.id}`)
      setIsFavorite(false)
      // dispatch(removeUserFavorite(post.id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <IconButton aria-label="add to favorites" id={post?.id} onClick={fn}>
        <FavoriteIcon color={isFavorite ? "error" : "default"} />
      </IconButton>
    </>
  )
}
