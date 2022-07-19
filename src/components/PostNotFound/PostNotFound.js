import Container from "@mui/material/Container"
import { Box, Typography } from "@mui/material"
import useStyles from "./styles"

export default function PostNotFound() {
  const classes = useStyles()
  return (
    <Container sx={{ marginBottom: "40px" }}>
      <Box>
        <Typography variant={"h3"} className={classes.number}>
          Oops!
        </Typography>
        <Typography variant={"h6"} className={classes.number}>
          Post does not exist.
        </Typography>
      </Box>
    </Container>
  )
}
