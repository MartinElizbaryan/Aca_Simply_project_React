import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import useStyles from "../Cabinet/style"
import { Button, Stack, Typography } from "@mui/material"
import { OutlinedInput } from "../Shared/Inputs/OutlinedInput/OutlinedInput"
import { useState } from "react"

export default function Settings() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const classes = useStyles()
  return (
    <Grid container spacing={0} mt={10}>
      <Grid
        item
        xs={12}
        md={3}
        mt={11}
        sx={{
          padding: 2,
        }}
      >
        <Paper elevation={2}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <SidebarCabinet />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <SidebarMobileCabinet />
          </Box>
        </Paper>
      </Grid>
      <Stack p={2} spacing={2}>
        <Typography variant="h6">Change password</Typography>
        <Stack spacing={2}>
          <Box item xs={12}>
            <Typography variant="caption">Old Password</Typography>
            <OutlinedInput label="Old Password" value={oldPassword} size="small" />
          </Box>
          <Grid item xs={12}>
            <OutlinedInput label="New Password" value={newPassword} size="small" />
          </Grid>
          <Grid item xs={12}>
            <OutlinedInput label="Confirm Password" value={confirmPassword} size="small" />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              // onClick={() => changePassword({ oldPassword, newPassword, confirmPassword })}
            >
              Change Password
            </Button>
          </Grid>
        </Stack>
      </Stack>
    </Grid>
  )
}
