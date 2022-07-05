import { Checkbox, FormControl, FormControlLabel, FormGroup, ListItemButton } from "@mui/material"
// import useStyles from "./styles"

export const ListItemWithCheckbox = ({ title, onChange, ...props }) => {
  // const classes = useStyles()

  return (
    <ListItemButton dense {...props}>
      <FormControl
        component="fieldset"
        sx={{
          display: "block",
          width: "100%",
          "& span": {
            fontSize: "0.9rem",
          },
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox size="small" onChange={onChange} />} label={title} />
        </FormGroup>
      </FormControl>
    </ListItemButton>
  )
}
