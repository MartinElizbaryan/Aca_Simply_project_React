import Button from "@mui/material/Button"
import useStyles from "./styles"

export const GreenButton = ({ children, title, icon, ...props }) => {
  const classes = useStyles()

  return (
    <Button variant="contained" color="success" className={classes.button} {...props}>
      {icon}
      {title}
      {children}
    </Button>
  )
}
