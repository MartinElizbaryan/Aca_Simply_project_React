import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

export default function SearchInput({ ...props }) {
  return (
    <TextField
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}
