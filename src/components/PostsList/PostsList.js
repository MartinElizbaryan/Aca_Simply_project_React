import Post from "../Post/Post"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import PostNotFound from "../PostNotFound/PostNotFound"

export default function PostsList({
  data,
  changeable,
  editable,
  deletePost,
  trustPost,
  admin,
  deleteFromMyFavorites,
}) {
  return (
    <Container sx={{ marginBottom: "40px" }}>
      <Grid container spacing={2} sx={{ marginTop: 0 }} alignItems="center">
        {data?.length === 0 && <PostNotFound />}
        {data?.map((post) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
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
