import React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { colors } from '../../../constants/styles'
export default function From({ message, time }) {
    return (
        <ListItem key="1" sx={{
            justifyContent: 'flex-end',
        }}>
            <Grid container sx={{
                backgroundColor: colors.blue,
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
                    <ListItemText align="right" primary={message}></ListItemText>
                </Grid>
                <Grid item xs={12}>
                    <ListItemText align="right" secondary={time}></ListItemText>
                </Grid>
            </Grid>
        </ListItem>
    )
}