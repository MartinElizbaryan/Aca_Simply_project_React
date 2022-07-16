import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"

export const WhiteInput = styled(TextField)({
  color: "#fff !important",
  borderRadius: "5px",
  width: "100%",
  "& label": {
    fontSize: 14,
    color: "#fff !important",
  },
})
