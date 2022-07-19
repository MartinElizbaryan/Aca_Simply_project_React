import { useState } from "react"
import { Box, Button, SwipeableDrawer } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar"
import { useLocation } from "react-router-dom"
import Typography from "@mui/material/Typography"
import { getNameOfPage } from "../../../Account/utils"

export default function ProfileSidebarMobile() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
        <Typography sx={{ marginLeft: 2 }}>{getNameOfPage(location.pathname)}</Typography>
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
