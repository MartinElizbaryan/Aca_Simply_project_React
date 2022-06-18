import Grid from '@mui/material/Grid'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Radios({ variantInput }) {
    const variantInputValue = variantInput.split(' ').join('').toLowerCase();
    return (
        <Grid item xs={12} md={6} lg={3} display="flex" align="center">
            <FormGroup>
                <FormControlLabel value={variantInputValue} control={<Radio />} label={variantInput} />
            </FormGroup>
            <IconButton aria-label="delete" color="error">
                < DeleteIcon />
            </IconButton >
        </Grid >
    )
}