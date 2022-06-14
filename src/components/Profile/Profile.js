import SidebarCabinet from '../Shared/Sidebars/SidebarCabinet/SidebarCabinet'
import SidebarMobileCabinet from '../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material'
import { GreenButton } from '../Shared/Buttons/GreenButton/GreenButton'
import useStyles from '../Cabinet/style'
export default function Profile() {
    const classes = useStyles();
    return (
        <Grid container spacing={0} mt={10}>
            <Grid item xs={12} md={3} mt={11} sx={{
                padding: 2
            }}>
                <Paper elevation={2}>
                    <Box sx={{
                        display: {
                            xs: 'none', md: 'block'
                        },
                    }}>
                        <SidebarCabinet />
                    </Box>
                    <Box sx={{
                        display: {
                            xs: 'block', md: 'none'
                        }
                    }}>
                        <SidebarMobileCabinet />
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={9} mt={6}>
                <Box mt={5} mb={5}>
                    <Grid container spacing={2} p={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField className={classes.input} fullWidth label="Name" variant="outlined" size='normal' />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField className={classes.input} fullWidth label="Surname" variant="outlined" size='normal' />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField className={classes.input} fullWidth label="Phone" variant="outlined" size='normal' type="number" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField className={classes.input} fullWidth label="Old password" variant="outlined" size='normal' type="password" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField className={classes.input} fullWidth label="New password" variant="outlined" size='normal' type="password" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField className={classes.input} fullWidth label="Confirm password" variant="outlined" size='normal' type="password" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} p={2}>
                        <Grid item xs={8} sm={6} md={4}>
                            <GreenButton className={classes.button} type="button">Save Changes</GreenButton>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}