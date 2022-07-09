import { useState } from "react"
import { Box, Button, SwipeableDrawer } from "@mui/material"
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
    <Box>
      <Button
        onClick={toggleDrawer("left", true)}
        fullWidth
        sx={{
          padding: 2,
        }}
      >
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
    </Box>
  )
}
