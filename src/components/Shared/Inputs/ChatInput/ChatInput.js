import { InputAdornment, InputBase } from "@mui/material"

export default function ChatInput({ ...props }) {
  return (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      startAdornment={
        <InputAdornment position="start">
          {/*<IconButton color="primary">*/}
          {/*  <EmojiEmotionsIcon />*/}
          {/*</IconButton>*/}
        </InputAdornment>
      }
      fullWidth
      {...props}
    />
  )
}
