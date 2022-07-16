import Button from "@mui/material/Button"
import useStyles from "./styles"
import { useTheme } from "@mui/material"
import { colors } from "../../../../constants/styles"

export const BlueButton = ({ children, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Button
      variant="contained"
      className={classes.button}
      {...props}
      sx={{
        backgroundColor: theme.palette.blueButton.main,
        "&:hover": {
          backgroundColor: theme.palette.blueButton.hover,
        },
      }}
    >
      {children}
    </Button>
  )
}
