import Post from "../Post/Post"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

export default function PostsList({
  data,
  title,
  changeable,
  editable,
  deletePost,
  trustPost,
  admin,
  deleteFromMyFavorites,
  ColsCount = 4,
}) {
  return (
    <Container size="md">
      <Grid container spacing={2}>
        {data?.map((post, index) => {
          return (
            <Grid item xs={12} sm={6} lg={ColsCount} key={post.id}>
              <Post
                post={post}
                changeable={changeable}
                deletePost={deletePost}
                admin={admin}
                editable={editable}
                trustPost={trustPost}
                deleteFromMyFavorites={deleteFromMyFavorites}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
