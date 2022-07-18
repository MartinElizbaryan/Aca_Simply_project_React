import Button from "@mui/material/Button"
import useStyles from "./styles"
import { useTheme } from "@mui/material"

export const GreenButton = ({ children, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Button
      variant="contained"
      className={classes.button}
      {...props}
      sx={{
        backgroundColor: theme.palette.greenButton.main,
        color: theme.palette.greenButton.textColor,
        "&:hover": {
          backgroundColor: theme.palette.greenButton.hover,
        },
      }}
    >
      {children}
    </Button>
  )
}
