import SidebarCabinet from '../Shared/Sidebars/SidebarCabinet/SidebarCabinet'
import SidebarMobileCabinet from '../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { TextField, Typography } from '@mui/material'
import { GreenButton } from '../Shared/Buttons/GreenButton/GreenButton'
import AddButton from '../Shared/Buttons/AddButton/AddButton'
import MenuItem from '@mui/material/MenuItem';
import useStyles from './style'
import UploadButtons from '../Shared/Inputs/Upload'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
export default function CreatePost() {
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
                        <Grid item xs={12}>
                            <TextField className={classes.input} fullWidth label="Post Title" variant="outlined" size='normal' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.input} fullWidth label="Type" variant="outlined" size='normal' select >
                                <MenuItem value="lost">
                                    Lost
                                </MenuItem>
                                <MenuItem value="found">
                                    Found
                                </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.input} fullWidth label="Description" variant="outlined" size='normal' multiline rows={5} maxRows={10} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} display="flex">
                            <UploadButtons />
                        </Grid>
                        <Grid item xs={12} md={6} lg={12} display="flex" alignItems="center">
                            <AddButton /> <Typography variant="span" ml={3}>Add Question</Typography>
                        </Grid>
                    </Grid>
                    <Box>
                        <Grid container spacing={2} p={2}>
                            <Grid item xs={12}>
                                <TextField className={classes.input} fullWidth label="Quetion Title" variant="outlined" size='normal' />
                            </Grid>
                        </Grid>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <Grid container spacing={2} p={2}>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormGroup>
                                        <FormControlLabel value="variant1" control={<Radio defaultChecked />} label="Variant 1" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <FormGroup>
                                        <FormControlLabel value="variant2" control={<Radio />} label="Variant 2" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} display="flex" alignItems="center">
                                    <AddButton /> <Typography variant="span" ml={3}>Add Question Variant</Typography>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                    </Box>
                    <Grid container spacing={2} p={2}>
                        <Grid item xs={8} sm={6} md={4}>
                            <GreenButton className={classes.button} type="button">Save Changes</GreenButton>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid >
    )
}