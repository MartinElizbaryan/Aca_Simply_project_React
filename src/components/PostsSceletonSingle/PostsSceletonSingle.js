import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Skeleton from "@mui/material/Skeleton"

export default function PostsSceletonSingle({ ColsCount = 4 }) {
  return (
    <Container size="md">
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Grid container spacing={2}>
              <Grid item xs={"auto"}>
                <Skeleton variant="circular" width={40} height={40} />
              </Grid>
              <Grid item xs={8}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </Grid>
            </Grid>
            <Skeleton
              variant="rectangular"
              sx={{
                maxHeight: 500,
                minHeight: 250,
              }}
            />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" height={118} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
