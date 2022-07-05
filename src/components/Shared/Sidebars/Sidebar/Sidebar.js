import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import useFetch from "../../../../hooks/useFetch"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Collapse, ListItem, ListItemText } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { ListItemWithCheckbox } from "../../ListItems/ListItemWithCheckbox/ListItemWithCheckbox"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import SearchInput from "../../Inputs/SearchInput/SearchInput"
import useStyles from "./styles"

export default function Sidebar({ onOff, isChecked }) {
  const { data, error, loading } = useFetch("/categories")
  const [categories, setCategories] = useState([])
  const [openSearch, setOpenSearch] = useState(true)
  const [openTypes, setOpenTypes] = useState(true)
  const [openCategories, setOpenCategories] = useState(true)
  const classes = useStyles()

  const navigate = useNavigate()

  useEffect(() => {
    setCategories(data.categories)
  }, [data])

  const handleSearchButtonClick = () => {
    setOpenSearch(!openSearch)
  }

  const handleCategoriesButtonClick = () => {
    setOpenCategories(!openCategories)
  }

  const handleTypesButtonClick = () => {
    setOpenCategories(!openCategories)
  }

  return (
    <List component="nav">
      <ListItemButton onClick={handleSearchButtonClick} className={classes.button}>
        {openSearch ? <ExpandMore /> : <ChevronRightIcon />}
        <ListItemText primary="Search" sx={{ paddingLeft: 1 }} />
      </ListItemButton>
      <Collapse in={openSearch} timeout="auto" unmountOnExit>
        <ListItem sx={{ pl: 4 }}>
          <SearchInput />
        </ListItem>
      </Collapse>
      <ListItemButton onClick={handleCategoriesButtonClick} className={classes.button}>
        {openCategories ? <ExpandMore /> : <ChevronRightIcon />}
        <ListItemText primary="Types" sx={{ paddingLeft: 1 }} />
      </ListItemButton>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {["LOST", "FOUND"].map((type) => {
            return (
              <ListItemWithCheckbox
                sx={{ pl: 4 }}
                title={type}
                key={type}
                // onChange={(e) => onOff(e, category.id)}
              />
            )
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={handleCategoriesButtonClick} className={classes.button}>
        {openCategories ? <ExpandMore /> : <ChevronRightIcon />}
        <ListItemText primary="Categories" sx={{ paddingLeft: 1 }} />
      </ListItemButton>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories?.map((category) => {
            return (
              <ListItemWithCheckbox
                sx={{ pl: 4 }}
                title={category.name}
                key={category.id}
                onChange={(e) => onOff(e, category.id)}
              />
            )
          })}
        </List>
      </Collapse>
    </List>
  )
}
