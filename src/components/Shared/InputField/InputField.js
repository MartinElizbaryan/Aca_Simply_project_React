import React, { useState } from "react";
import { AccountCircle, Lock } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import AppColors from '../../../Constants/AppColors';

export function InputField({ account, password, placeholder }) {
    const [showUnderline, setShowUnderline] = useState(true);
    const showHideUnderline = () => {
        setShowUnderline(!showUnderline);
    }
    return (
        <TextField  id="input-with-icon-textfield" variant="standard" required placeholder={placeholder} fullWidth inputProps={{ style: { fontSize: 16, fontWeight: "200", }, maxLength: 30, }}
            InputProps={{
                disableUnderline: showUnderline,
                startAdornment: (
                    <InputAdornment position="start" >
                        {account && <AccountCircle />}
                        {password && <Lock />}
                    </InputAdornment>
                ),
            }}
            style={{ backgroundColor: AppColors.lightGrey, height: 40, display: "flex", justifyContent: "center", width: "100%", borderRadius: 5, paddingLeft: 10, marginBottom: 10 }}
            onClick= {showHideUnderline}
        />
    )
}