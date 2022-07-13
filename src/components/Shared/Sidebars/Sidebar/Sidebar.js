import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  RadioGroup,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { ListItemWithCheckbox } from "../../ListItems/ListItemWithCheckbox/ListItemWithCheckbox"
import { ListItemWithRadio } from "../../ListItems/ListItemWithRadio/ListItemWithRadio"
import SearchInput from "../../Inputs/SearchInput/SearchInput"
import { useFetch } from "../../../../hooks/useFetch"
import { useDebounce } from "../../../../hooks/useDebounce"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"

export default function Sidebar({ handleCategoryChange, onClose }) {
  const { t } = useTranslation()
  const { data, error, loading } = useFetch("/categories")
  const [searchParams, setSearchParams] = useSearchParams()
  const [type, setType] = useState(searchParams.get("type") || "")
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const [categories, setCategories] = useState([])
  const [openTypes, setOpenTypes] = useState(true)
  const [openCategories, setOpenCategories] = useState(true)
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)
  const classes = useStyles()

  useEffect(() => {
    setCategories(data.categories)
  }, [data])

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm !== searchParams.get("search")) {
      searchParams.set("search", debouncedSearchTerm)
      setSearchParams(searchParams)
    } else if (!debouncedSearchTerm) {
      searchParams.delete("search")
      setSearchParams(searchParams)
    }
  }, [debouncedSearchTerm])

  useEffect(() => {
    if (searchParams.get("type") !== type) {
      searchParams.set("type", type)
      setSearchParams(searchParams)
    }
  }, [type])

  useEffect(() => {
    const searchQuery = searchParams.get("search") || ""
    const typeQuery = searchParams.get("type") || ""
    setSearchTerm(searchQuery)
    setType(typeQuery)
  }, [searchParams])

  const handleCategoriesButtonClick = () => {
    setOpenCategories(!openCategories)
  }

  const handleTypesButtonClick = () => {
    setOpenTypes(!openTypes)
  }

  return (
    <List component="nav">
      <ListItemButton className={classes.button}>
        <IconButton onClick={onClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </ListItemButton>
      <ListItem sx={{ pl: 4 }}>
        <SearchInput
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      </ListItem>
      <ListItemButton onClick={handleTypesButtonClick} className={classes.button}>
        {openTypes ? <ExpandMore /> : <ChevronRightIcon />}
        <ListItemText primary={t("Types")} sx={{ paddingLeft: 1 }} />
      </ListItemButton>
      <Collapse in={openTypes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <RadioGroup value={type}>
            {["LOST", "FOUND"].map((type) => {
              return (
                <ListItemWithRadio
                  sx={{ pl: 4 }}
                  type={type}
                  label={t(type)}
                  key={type}
                  onChange={(e) => setType(e.target.value)}
                />
              )
            })}
          </RadioGroup>
        </List>
      </Collapse>
      <ListItemButton onClick={handleCategoriesButtonClick} className={classes.button}>
        {openCategories ? <ExpandMore /> : <ChevronRightIcon />}
        <ListItemText primary={t("Categories")} sx={{ paddingLeft: 1 }} />
      </ListItemButton>
      <Collapse in={openCategories} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories?.map((category) => {
            return (
              <ListItemWithCheckbox
                sx={{ pl: 4 }}
                category={category.name}
                label={t(category.name)}
                key={category.id}
                onChange={(e) => handleCategoryChange(e, category.id)}
              />
            )
          })}
        </List>
      </Collapse>
    </List>
  )
}
