import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";
import { NavToolbar, Logo, NavLink } from './utilits'
import { AppBar, Stack, Menu, MenuItem, IconButton, Typography, ListItemIcon } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AccountCircle, Settings, Logout } from '@mui/icons-material';
import { navlist } from './constants'
export default function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="stick">
      <NavToolbar>
        <Logo />
        <Stack direction="row" spacing={2}>
          {navlist?.map((item, index) => {
            return (
              <NavLink to={item.route} component={RouterLink} underline="none" color="" key={index}>{item.name}</NavLink>
            )
          })}
        </Stack>
        {auth && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              <Typography ml={2}>Ashot</Typography>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}

      </NavToolbar>
    </AppBar>
  );
}

