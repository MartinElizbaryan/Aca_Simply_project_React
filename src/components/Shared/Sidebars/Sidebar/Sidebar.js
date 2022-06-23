import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import useFetch from "../../../../hooks/useFetch"
import { useEffect, useState } from "react"

export default function Sidebar() {
  const { data, error, loading } = useFetch("/categories")

  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories(data.categories)
    console.log(data.categories)
  }, [data])

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Category List
        </ListSubheader>
      }
    >
      {categories?.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
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
                  label={item.name}
                  labelPlacement="end"
                  sx={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </FormGroup>
            </FormControl>
          </ListItemButton>
        )
      })}
    </List>
  )
}
