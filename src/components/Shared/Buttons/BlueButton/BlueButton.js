import Button from "@mui/material/Button"
import useStyles from "./styles"
import { useTheme } from "@mui/material"

export const BlueButton = ({ children, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Button
      variant="contained"
      className={classes.button}
      {...props}
      sx={{
        color: theme.palette.blueButton.textColor,
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
