import React, { useState } from "react";
import { NavToolbar } from '../Shared/NavToolBar/NavToolBar'
import { Logo } from '../Shared/Logo/Logo'
import { AppBar, Stack, Menu, MenuItem, IconButton, Typography, ListItemIcon } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { navlist } from './constants'
import { loginNavlist } from './constants'
import AppColors from "../../Constants/AppColors.js";
import { CustomLink as Link } from '../Shared/CustomLink/CustomLink'
export default function Header() {
  // eslint-disable-next-line
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="sticky" >
      <NavToolbar>
        <Logo />
        <Stack direction="row" spacing={2} sx={{
          display: {
            xs: 'none', sm: 'block'
          }
        }
        }>
          {navlist?.map((item, index) => {
            return (
              <Link url={item.route} color={AppColors.white} key={index} title={item.name} />
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
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <Link url={loginNavlist[0].route} color={AppColors.black} key={0} title={"My Profile"} />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}

      </NavToolbar>
    </AppBar >
  );
}

