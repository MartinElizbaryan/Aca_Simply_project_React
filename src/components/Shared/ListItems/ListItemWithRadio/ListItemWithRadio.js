import { FormControl, FormControlLabel, FormGroup, ListItemButton, Radio } from "@mui/material"
// import useStyles from "./styles"

export const ListItemWithRadio = ({ label, onChange, ...props }) => {
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
          <FormControlLabel
            control={<Radio size="small" value={label} onChange={onChange} />}
            label={label}
          />
        </FormGroup>
      </FormControl>
    </ListItemButton>
  )
}
