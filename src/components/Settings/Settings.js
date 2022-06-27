import React, { useState } from "react"
import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import SidebarCabinet from "../Shared/Sidebars/SidebarCabinet/SidebarCabinet"
import SidebarMobileCabinet from "../Shared/Sidebars/SidebarMobileCabinet/SidebarMobileCabinet"
import useStyles from "./styles"
import InputAdornment from "@mui/material/InputAdornment"
import { AccountCircle, Lock, LockClock, Mail, Password } from "@mui/icons-material"

export default function Settings() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)

  const classes = useStyles()
  return (
    <Grid container spacing={0} mt={10}>
      <Grid item xs={12} md={3} mt={11} p={2}>
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
      <Grid item xs={12} md={5} p={2} ml={{ xs: 0, md: 10 }}>
        <Typography variant="h6">Change password</Typography>
        <Stack spacing={2} mt={5}>
          <Box className={classes.box}>
            <Typography variant="caption">Old Password</Typography>
            <TextField
              size={"small"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </Box>
          <Box className={classes.box}>
            <Typography variant="caption">New Password</Typography>
            <TextField
              size={"small"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {account && <AccountCircle />}
                    {password && <Lock />}
                    {email && <Mail />}
                    {confirmedPassword && <LockClock />}
                    {sixDigitIcon && <Password />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className={classes.box}>
            <Box>
              <Typography variant="caption">Confirm Password</Typography>
            </Box>
            <TextField
              size={"small"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
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
