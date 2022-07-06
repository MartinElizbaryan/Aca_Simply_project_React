import React from "react"
import { AccountCircle, Lock, LockClock, Mail, Password } from "@mui/icons-material"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import useStyles from "./styles"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

export function InputField({
  account,
  password,
  email,
  sixDigitIcon,
  confirmedPassword,
  eye,
  setIsVisible,
  isVisible,
  ...props
}) {
  const classes = useStyles()
  const type = isVisible ? "text" : "password"
  return (
    <TextField
      type={type}
      {...props}
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
            {sixDigitIcon && <Password />}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {eye && (
              <IconButton onClick={() => setIsVisible(!isVisible)} className={classes.inputStyle}>
                {type === "password" ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      className={classes.inputStyle}
    />
  )
}
