import { useState } from 'react'
import Grid from '@mui/material/Grid'
import AddButton from '../../Buttons/AddButton/AddButton'
import { TextField } from '@mui/material'
import useStyles from '../Quetion/style'
import Radios from '../Radios/Radios'
export default function Variant() {
    const [radio, setRadio] = useState([])
    const [variantInput, setVariantInput] = useState('')
    const [variantRadioValidate, setVariantRadioValidate] = useState(true)
    const addVariantRadio = () => {
        let newRadio;
        if (variantInput !== '') {
            newRadio = [...radio, <Radios variantInput={variantInput} key={radio.length + 1} />]
            setRadio(newRadio)
            setVariantInput('')
            setVariantRadioValidate(true)
        }
        else {
            console.log('Varinat cannt be undefined');
            setVariantRadioValidate(false)
        }
    }
    const onVariantChange = (e) => {
        setVariantInput(e.target.value)
    }
    const classes = useStyles();
    return (
        <Grid container spacing={2} p={2}>
            <Grid item xs={12} display="flex" alignItems="center">
                <Grid container spacing={2}>
                    <Grid item xs={12} display='flex' alignItems="center">
                        <TextField className={classes.input} fullWidth label="Variant Title" variant="outlined" name="variant" value={variantInput} onChange={onVariantChange} size='normal' sx={{
                            marginRight: 2
                        }} error={variantRadioValidate ? false : true} helperText={variantRadioValidate ? null : "Variant can't be empty and must be have minimum 2 variants"} /><AddButton onClick={addVariantRadio} />
                    </Grid>
                </Grid>
            </Grid>
            {radio}
        </Grid>
    )
}