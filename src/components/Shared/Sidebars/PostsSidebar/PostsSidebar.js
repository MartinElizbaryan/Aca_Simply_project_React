import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router-dom"
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  RadioGroup,
  SwipeableDrawer,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { ListItemWithRadio } from "../../ListItems/ListItemWithRadio/ListItemWithRadio"
import { ListItemWithCheckbox } from "../../ListItems/ListItemWithCheckbox/ListItemWithCheckbox"
import { useFetch } from "../../../../hooks/useFetch"
import useStyles from "./styles"

export default function PostsSidebar({ open, toggleDrawer, handleCategoryChange }) {
  const { data, error, loading } = useFetch("/categories")
  const [searchParams, setSearchParams] = useSearchParams()
  const [type, setType] = useState(searchParams.get("type") || "")
  const [categories, setCategories] = useState([])
  const [openTypes, setOpenTypes] = useState(true)
  const [openCategories, setOpenCategories] = useState(true)
  const { t } = useTranslation()
  const classes = useStyles()

  useEffect(() => {
    setCategories(data.categories)
  }, [data])

  useEffect(() => {
    if (searchParams.get("type") !== type) {
      searchParams.set("type", type)
      setSearchParams(searchParams)
    }
  }, [type])

  useEffect(() => {
    const typeQuery = searchParams.get("type") || ""
    setType(typeQuery)
  }, [searchParams])

  return (
    <SwipeableDrawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{ width: 250 }}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box sx={{ textAlign: "end" }}>
        <Box sx={{ width: 250 }} role="presentation">
          <List component="nav">
            <IconButton onClick={toggleDrawer(false)}>
              <CloseOutlinedIcon />
            </IconButton>
            <ListItemButton onClick={() => setOpenTypes(!openTypes)} className={classes.button}>
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
            <ListItemButton
              onClick={() => setOpenCategories(!openCategories)}
              className={classes.button}
            >
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
        </Box>
      </Box>
    </SwipeableDrawer>
  )
}
