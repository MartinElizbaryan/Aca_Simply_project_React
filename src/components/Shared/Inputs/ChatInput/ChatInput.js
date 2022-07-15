import { IconButton, InputAdornment, InputBase } from "@mui/material"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"

export default function ChatInput({ ...props }) {
  return (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      startAdornment={
        <InputAdornment position="start">
          <IconButton color="primary">
            <EmojiEmotionsIcon />
          </IconButton>
        </InputAdornment>
      }
      fullWidth
      {...props}
    />
  )
}
