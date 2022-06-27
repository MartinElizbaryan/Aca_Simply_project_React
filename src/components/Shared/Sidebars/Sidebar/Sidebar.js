import ListSubheader from "@mui/material/ListSubheader"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import useFetch from "../../../../hooks/useFetch"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Sidebar({ onOff, isChecked }) {
  const { data, error, loading } = useFetch("/categories")
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setCategories(data.categories)
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
      {categories?.map((category) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <ListItemButton key={category.id}>
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
                  control={<Checkbox onChange={(e) => onOff(e, category.id)} />}
                  label={category.name}
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
