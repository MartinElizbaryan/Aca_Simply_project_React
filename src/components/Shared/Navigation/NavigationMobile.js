import { useState } from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import { navlist } from "../../Header/constants"
import { CustomLink as Link } from "../CustomLink/CustomLink"
import { colors } from "../../../constants/styles.js"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import WidgetsIcon from "@mui/icons-material/Widgets"

export default function NavigationMobile() {
  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(anchor, false)}>
      <List component="div" disablePadding>
        {navlist?.map((item, index) => {
          return (
            <ListItemButton sx={{ padding: 2 }} key={index}>
              <Link url={item.route} color={colors.dark} key={index} content={item.name} />
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  )

  return (
    <div>
      <Button
        onClick={toggleDrawer("left", true)}
        sx={{
          color: "#fff",
        }}
      >
        <WidgetsIcon color="inherit" />
      </Button>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  )
}
