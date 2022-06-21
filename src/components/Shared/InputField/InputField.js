import React from "react"
import { AccountCircle, Lock, LockClock, Mail } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import { TextField } from "@mui/material"
import useStyles from "./style"

export function InputField({ account, password, email, confirmedPassword, ...props }) {
  const classes = useStyles()
  return (
    <TextField
      {...props}
      id="input-with-icon-textfield"
      variant="standard"
      required
      fullWidth
      inputProps={{ style: { fontSize: 16, fontWeight: "200" }, maxLength: 30 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {account && <AccountCircle />}
            {password && <Lock />}
            {email && <Mail />}
            {confirmedPassword && <LockClock />}
          </InputAdornment>
        ),
      }}
      className={classes.inputStyle}
    />
  )
}
