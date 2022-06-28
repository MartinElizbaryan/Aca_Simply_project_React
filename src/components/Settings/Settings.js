import React, { useState } from "react"
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import PasswordInput from "../Shared/Inputs/PasswordInput/PasswordInput"
import useStyles from "./styles"

export default function Settings() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const classes = useStyles()
  return (
    <Grid container spacing={0} mt={10}>
      <Grid item xs={12} md={3} mt={1} p={2}>
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
      <Grid item xs={12} md={7} p={2} ml={{ xs: 0, md: 10 }}>
        <Typography variant="h6" mb={5}>
          Change password
        </Typography>
        <Typography variant="body2">
          Enter your current password along with a new one to change it.
        </Typography>
        <Stack spacing={5} mt={5}>
          <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
            <Grid item xs={6}>
              <Typography variant="caption">Current Password:</Typography>
            </Grid>
            <Grid item xs={12}>
              <PasswordInput value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            </Grid>
          </Stack>
          <Grid item>
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="caption">New Password:</Typography>
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Grid>
            </Stack>
          </Grid>
          <Grid>
            <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="caption">Confirm New Password:</Typography>
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Stack>
          </Grid>
          <Box item xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              // onClick={() => changePassword({ oldPassword, newPassword, confirmPassword })}
            >
              Change Password
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}
