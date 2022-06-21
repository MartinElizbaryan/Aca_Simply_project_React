import { Link as RouterLink } from "react-router-dom"
import { Link } from "@mui/material"

export function CustomLink({ title, color, url, onClick }) {
  return (
    <Link to={url} color={color} underline="none" component={RouterLink} onClick={onClick}>
      {title}
    </Link>
  )
}
