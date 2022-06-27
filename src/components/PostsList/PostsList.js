import Post from "../Post/Post"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default function PostsList({ data, title, ColsCount = 4 }) {
  return (
    <Container size="md">
      <Typography variant="h4" component="h2" mb={2} textAlign="center">
        {title}
      </Typography>
      <Grid container spacing={2}>
        {data?.map((post, index) => {
          return (
            <Grid item xs={12} sm={6} lg={ColsCount} key={post.id}>
              <Post post={post} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
