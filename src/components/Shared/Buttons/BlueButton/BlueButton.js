import Button from "@mui/material/Button"
import useStyles from "./styles"

export const BlueButton = ({ children, title, icon, ...props }) => {
  const classes = useStyles()

  return (
    <Button variant="contained" className={classes.button} {...props}>
      {icon}
      {title}
      {children}
    </Button>
  )
}
