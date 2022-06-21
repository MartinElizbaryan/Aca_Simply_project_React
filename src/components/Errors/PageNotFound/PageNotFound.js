import PageNotFoundImage from "../../../assets/404.jpg"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"
import HomeIcon from "@mui/icons-material/Home"
import useStyles from "./style"

export default function PageNotFound() {
  const classes = useStyles()
  return (
    <Box mt={15}>
      <Typography variant="h4" textAlign="center">
        <Link to="/" component={RouterLink} underline="none" className={classes.linkItem}>
          <HomeIcon fontSize="large" /> Go Home
        </Link>
      </Typography>
      <Grid container justifyContent="center">
        <Grid item sm={12} md={8}>
          <CardMedia component="img" image={PageNotFoundImage} alt="green iguana" />
        </Grid>
      </Grid>
    </Box>
  )
}
