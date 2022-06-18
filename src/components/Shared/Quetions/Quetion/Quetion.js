import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { IconButton, TextField } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Variant from "../Variant/Variant";
import useStyles from "./style";
import DeleteIcon from '@mui/icons-material/Delete';
export default function Quetion() {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} display='flex' alignItems="center">
          <TextField
            className={classes.input}
            fullWidth
            label="Quetion Title"
            variant="outlined"
            size="normal"
          />
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" color="error" />
          </IconButton>
        </Grid>
      </Grid>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Variant />
      </RadioGroup>
    </Box>
  );
}
