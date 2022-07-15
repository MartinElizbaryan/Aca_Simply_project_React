import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import Stack from "@mui/material/Stack"

const Input = styled("input")({
  display: "none",
})

export default function UploadInput({ handleFileInputChange, multipleUpload }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="input-file">
        <Input
          accept="image/*"
          id="input-file"
          type="file"
          onChange={handleFileInputChange}
          // value={fileInputState}

          multiple={multipleUpload}
        />
        <IconButton color="primary" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  )
}
