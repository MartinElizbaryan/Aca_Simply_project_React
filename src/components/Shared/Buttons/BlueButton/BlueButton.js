import Button from "@mui/material/Button"
import { colors } from "../../../../constants/styles"
import { styled } from "@mui/material/styles"

export const BlueButton = styled(Button)({
  backgroundColor: colors.blue,
  color: colors.white,
  width: "100%",
  padding: "12px 14px",
  fontSize: "14px",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: colors.hoveredBlue,
  },
})
