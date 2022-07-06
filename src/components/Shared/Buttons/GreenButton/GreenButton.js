import Button from "@mui/material/Button"
import useStyles from "./styles"

export const GreenButton = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <Button variant="contained" color="success" className={classes.button} {...props}>
      {children}
    </Button>
  )
}
