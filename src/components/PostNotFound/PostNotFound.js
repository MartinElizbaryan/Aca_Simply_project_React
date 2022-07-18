import Container from "@mui/material/Container"
import { Grid, Typography, Box } from "@mui/material"
import useStyles from "./styles"

export default function PostNotFound() {
  const classes = useStyles()
  return (
    <Container sx={{ marginBottom: "40px" }}>
      <Box className={classes.text_div}>
        <Typography className={classes.number}>Post does not exist.</Typography>
      </Box>
    </Container>
  )
}
