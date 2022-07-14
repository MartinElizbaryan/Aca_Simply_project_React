import Box from "@mui/material/Box"
import Sidebar from "../Sidebar/Sidebar"
import { Drawer } from "@mui/material"

export default function SidebarMobile({ open, toggleDrawer }) {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{ width: 250 }}
      onClose={toggleDrawer(false)}
    >
      <Box sx={{ textAlign: "end" }}>
        <Box sx={{ width: 250 }} role="presentation">
          <Sidebar onClose={toggleDrawer(false)} />
        </Box>
      </Box>
    </Drawer>
  )
}
