import Box from "@mui/material/Box"
import Sidebar from "../Sidebar/Sidebar"
import { Drawer } from "@mui/material"
import Button from "@mui/material/Button"
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined"

export default function SidebarMobile({ open, toggleDrawer }) {
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <Sidebar onClose={toggleDrawer(false)} />
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)} variant="filled">
        <FilterListOutlinedIcon /> Search and Filter
      </Button>
      <Drawer
        variant="persistent"
        anchor={"left"}
        open={open}
        sx={{ width: 250 }}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ textAlign: "end" }}></Box>
        {/*<Divider />*/}
        {list("left")}
      </Drawer>
    </div>
  )
}
