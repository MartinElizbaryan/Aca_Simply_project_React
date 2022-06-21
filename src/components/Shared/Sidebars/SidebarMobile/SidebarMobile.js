import { useState } from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import Sidebar from "../Sidebar/Sidebar"

export default function SidebarMobile() {
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
      <Sidebar />
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <FilterAltIcon /> Filtered list
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
