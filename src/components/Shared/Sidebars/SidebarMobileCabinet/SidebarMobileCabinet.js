import { useState } from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SidebarCabinet from "../SidebarCabinet/SidebarCabinet"

export default function SidebarMobileCabinet() {
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
      <SidebarCabinet />
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <AccountCircleIcon /> Cabinet
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
