import { Box, Container, Grid, useTheme } from "@mui/material"
import ProfileSidebar from "../Shared/Sidebars/ProfileSidebar/ProfileSidebar"
import { Outlet } from "react-router-dom"
import useStyles from "./styles"
import ProfileSidebarMobile from "../Shared/Sidebars/ProfileSidebarMobile/ProfileSidebarMobile"

const Account = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid
        item
        xs={12}
        md={9}
        sx={{ backgroundColor: theme.palette.body, width: "100%", height: "100%" }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <ProfileSidebar />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <ProfileSidebarMobile />
        </Box>

        <Grid
          sx={{
            marginLeft: {
              xs: 0,
              sm: "250px",
            },
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Account
