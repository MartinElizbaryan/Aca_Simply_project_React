import { Box, Container, Typography } from '@mui/material'
import { bgImage } from './constants'
import useStyles from './style'
import AppColors from '../../../Constants/AppColors'
export default function FindPost() {
    const classes = useStyles();
    return (
        <Box sx={{
            backgroundImage: `url(${bgImage})`,
        }} className={classes.BgImage}>
            <Container maxWidth="lg">
                <Box className={classes.homeContainer}>
                    <Box textAlign="center">
                        <Typography variant="h3" mb={2} color={AppColors.white}>Find your lost item</Typography>
                        <Typography variant="p" color={AppColors.white}>lorem ipsum one dolor esim inch vor ankap ban</Typography>
                    </Box>
                </Box>
            </Container>
        </Box >
    )
}