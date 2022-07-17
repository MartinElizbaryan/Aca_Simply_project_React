import { TextField } from "@mui/material"
import useStyles from "./styles"

export default function WhiteInput({ ...props }) {
  const classes = useStyles()

  return <TextField {...props} size={"small"} className={classes.input} />
}
