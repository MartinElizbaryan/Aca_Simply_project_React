import { Box, Container, Grid } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import { Outlet } from "react-router-dom"
import useStyles from "./styles"
import { colors } from "../../constants/styles"

export default function Account() {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid
        item
        xs={12}
        md={9}
        sx={{ backgroundColor: colors.grey, width: "100%", height: "100%" }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          className={classes.sidebar}
        >
          <SidebarCabinet />
        </Box>
        <Grid sx={{ marginLeft: "250px" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}
