import React from "react";
import { AccountCircle, Lock } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import {colors} from '../../../constants/styles';

export function InputField({ account, password, ...props }) {

    return (
        <TextField {...props} id="input-with-icon-textfield" variant="standard" required fullWidth inputProps={{ style: { fontSize: 16, fontWeight: "200", }, maxLength: 30, }}
            InputProps={{
                /* disableUnderline: true, */
                startAdornment: (
                    <InputAdornment position="start" >
                        {account && <AccountCircle />}
                        {password && <Lock />}
                    </InputAdornment>
                ),
            }}
            style={{ backgroundColor: colors.lightGrey, height: 40, display: "flex", justifyContent: "center", width: "100%", borderRadius: 5, paddingLeft: 10, marginBottom: 10 }}
        />
    )
}