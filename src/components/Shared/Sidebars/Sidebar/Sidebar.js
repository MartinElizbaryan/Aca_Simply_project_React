import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"

export default function Sidebar() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filtered List
        </ListSubheader>
      }
    >
      <ListItemButton>
        <FormControl
          component="fieldset"
          sx={{
            display: "block",
            width: "100%",
          }}
        >
          <FormGroup
            aria-label="position"
            row
            sx={{
              display: "block",
              width: "100%",
            }}
          >
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Laptop"
              labelPlacement="end"
              sx={{
                display: "block",
                width: "100%",
              }}
            />
          </FormGroup>
        </FormControl>
      </ListItemButton>
      <ListItemButton>
        <FormControl
          component="fieldset"
          sx={{
            display: "block",
            width: "100%",
          }}
        >
          <FormGroup
            aria-label="position"
            row
            sx={{
              display: "block",
              width: "100%",
            }}
          >
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Phone"
              labelPlacement="end"
              sx={{
                display: "block",
                width: "100%",
              }}
            />
          </FormGroup>
        </FormControl>
      </ListItemButton>
      <ListItemButton>
        <FormControl
          component="fieldset"
          sx={{
            display: "block",
            width: "100%",
          }}
        >
          <FormGroup
            aria-label="position"
            row
            sx={{
              display: "block",
              width: "100%",
            }}
          >
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Pet"
              labelPlacement="end"
              sx={{
                display: "block",
                width: "100%",
              }}
            />
          </FormGroup>
        </FormControl>
      </ListItemButton>
    </List>
  )
}
