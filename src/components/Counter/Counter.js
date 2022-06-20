import useStyles from './style'
import CountUp from 'react-countup'
import { Box, Grid, Typography, Container } from '@mui/material'
export default function Counter() {
    const classes = useStyles();
    return (
        <Box className={classes.counterBox} pt={10} pb={10}>
            <Container size="md" className={classes.counterContainer}>
                <Typography variant="h4" component="h2" textAlign="center">Lose. Search. Find.</Typography>
                <Typography variant="p" component="p" textAlign="center">Anytime. Anyplace. Anywhere.</Typography>
                <Grid container justifyContent="center" spacing={2} mt={5}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={1542} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Users</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={1214} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Posts</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={841} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Found items</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}