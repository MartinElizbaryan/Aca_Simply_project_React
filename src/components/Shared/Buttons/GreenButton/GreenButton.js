import Button from "@mui/material/Button"
import useStyles from "./styles"

export const GreenButton = ({ title, icon, ...props }) => {
  const classes = useStyles()

  return (
    <Button variant="contained" className={classes.button} {...props}>
      {icon}
      {title}
    </Button>
  )
}
