import { Link as RouterLink } from "react-router-dom"
import { Link } from "@mui/material"

export function CustomLink({ children, url, ...props }) {
  return (
    <Link to={url} underline="none" component={RouterLink} {...props}>
      {children}
    </Link>
  )
}
