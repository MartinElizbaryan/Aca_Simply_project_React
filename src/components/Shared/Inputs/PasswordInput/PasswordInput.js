import { useState } from "react"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

export default function PasswordInput({ ...props }) {
  const [isVisible, setIsVisible] = useState(false)
  const type = isVisible ? "text" : "password"
  return (
    <TextField
      type={type}
      {...props}
      size={"small"}
      sx={{ maxWidth: 260 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setIsVisible(!isVisible)}>
              {type === "password" ? (
                <VisibilityOffIcon fontSize="small" />
              ) : (
                <VisibilityIcon fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
