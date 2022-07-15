import { useState } from "react"
import { Box, Button, SwipeableDrawer } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar"

export default function ProfileSidebarMobile() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <Box>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          padding: 2,
          borderRadius: 1,
        }}
      >
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box onClick={toggleDrawer(false)}>
          <ProfileSidebar />
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}
