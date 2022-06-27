import FavoriteIcon from "@mui/icons-material/Favorite"
import IconButton from "@mui/material/IconButton"
import { useEffect, useState } from "react"
import api from "../../../../api/api"

export default function HeartButton({ favoriteLength, id }) {
  console.log(favoriteLength)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favoriteLength ? true : false)
  }, [favoriteLength])

  const fn = () => {
    isFavorite ? removeFavorite() : addFavorite()
  }

  const addFavorite = async () => {
    try {
      await api.post(`/favorites/${id}`)
      setIsFavorite(true)
    } catch (error) {
      console.log(error)
    }
  }

  const removeFavorite = async () => {
    try {
      await api.delete(`/favorites/${id}`)
      setIsFavorite(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <IconButton aria-label="add to favorites" onClick={fn}>
        <FavoriteIcon color={isFavorite ? "error" : "default"} />
      </IconButton>
    </>
  )
}
