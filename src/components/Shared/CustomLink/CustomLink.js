
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

export function CustomLink({ title, color, url }) {
    return (
        <Link to={url} color={color} underline="none" component={RouterLink}>{title}</Link>
    )
}