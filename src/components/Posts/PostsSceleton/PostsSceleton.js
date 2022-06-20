import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
export default function PostsList({ ColsCount = 4 }) {
    return (
        <Container size="md">
            <Skeleton variant="text" />
            <Grid container spacing={2} mt={3}>
                {[0, 1, 2, 3, 4, 5].map(((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} lg={ColsCount} key={index}>
                            <Stack spacing={1}>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" height={118} />
                            </Stack>
                        </Grid>
                    )
                }))}
            </Grid>
        </Container>
    )
}