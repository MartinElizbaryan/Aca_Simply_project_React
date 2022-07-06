import Button from "@mui/material/Button"
import useStyles from "./styles"

export const BlueButton = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <Button variant="contained" className={classes.button} {...props}>
      {children}
    </Button>
  )
}
