import useStyles from './style'
import CountUp from 'react-countup'
import { Box, Grid, Typography, Container } from '@mui/material'
export default function Counter() {
    const classes = useStyles();
    return (
        <Box className={classes.counterBox} pt={10} pb={10}>
            <Container size="md" className={classes.counterContainer}>
                <Typography variant="h4" component="h2" textAlign="center">JobBoard Site Stats</Typography>
                <Typography variant="p" component="p" textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde officiis recusandae sequi excepturi corrupti</Typography>
                <Grid container spacing={2} mt={5}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={1200} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Candidates</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={54} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Jobs Posted</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={120} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Jobs Filled</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h4" component="p" textAlign="center"><CountUp end={550} duration={2.75} /></Typography>
                        <Typography variant="h6" component="p" textAlign="center">Companies</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}