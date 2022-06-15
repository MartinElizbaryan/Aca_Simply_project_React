import Post from '../Post/Post';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
export default function PostsList({ title, data, ColsCount = 4 }) {
    const postsData = data;
    return (
        <Container size="md">
            <Typography variant="h4" component="h2" mb={2} textAlign="center">{title}</Typography>
            <Grid container spacing={2}>
                {postsData?.map((post, index) => {
                    return (
                        <Grid item xs={12} sm={6} lg={ColsCount} key={index}>
                            < Post
                                authorName={post.authorName}
                                authorSurname={post.authorSurname}
                                image={post.image}
                                date={post.date}
                                description={post.description}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}