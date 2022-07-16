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
      s
      sx={{
        backgroundColor: theme.palette.greenButton.main,
        "&:hover": {
          backgroundColor: theme.palette.greenButton.hover,
        },
      }}
    >
      {children}
    </Button>
  )
}
