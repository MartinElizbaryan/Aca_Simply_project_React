import { Link as RouterLink } from "react-router-dom"
import { Box, CardMedia, Grid, Link, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PageNotFoundImage from "../../assets/404.png"
import useStyles from "./style"

const PageNotFound = () => {
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

export default PageNotFound
