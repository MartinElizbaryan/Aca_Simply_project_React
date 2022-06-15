import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { colors } from '../../../constants/styles'
export default function To({ message, time }) {
    return (
        <ListItem key="2" sx={{
            justifyContent: 'flex-start',
        }}>
            <Grid container sx={{
                backgroundColor: colors.green,
                borderRadius: '15px',
                width: {
                    xs: '75%',
                    md: '50%',
                    lg: '35%',
                },
                color: colors.white,
                padding: 2

            }}>
                <Grid item xs={12}>
                    <ListItemText align="left" primary={message}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText align="left" secondary={time} sx={{
                        color: '#fff !important'
                    }}></ListItemText>
                </Grid>
            </Grid>
        </ListItem>
    )
}