import { TextField } from "@mui/material"
import useStyles from "./styles"

export default function UnlabeledInput({ ...props }) {
  const classes = useStyles()

  return <TextField {...props} size={"small"} className={classes.input} />
}
