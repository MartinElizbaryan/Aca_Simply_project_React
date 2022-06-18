import React, { useState } from "react";
import { Toolbar } from '@mui/material'
import { Logo } from '../Shared/Logo/Logo'
import { AppBar, Stack, Menu, MenuItem, IconButton, Typography, ListItemIcon, Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { navlist } from './constants'
import { colors } from "../../constants/styles.js";
import { CustomLink as Link } from '../Shared/CustomLink/CustomLink'
import NavigationMobile from "../Shared/Navigation/NavigationMobile";
import useStyles from "./styles"
import { signOut } from "./utils";
export default function Header() {
  // eslint-disable-next-line
  const classes = useStyles()
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Logo />
        <Stack direction="row" spacing={2} sx={{
          display: {
            xs: 'none', sm: 'flex'
          }
        }
        }>
          {navlist?.map((item, index) => {
            return (
              <Link url={item.route} color={colors.white} key={index} title={item.name} />
            )
          })}
        </Stack>
        {auth && (
          <>
            <Box display="flex" alignItems="center">
              <Box sx={{
                display: {
                  xs: 'block', sm: 'none'
                }
              }}>
                <NavigationMobile />
              </Box>
              <MenuItem>
                <Link url="/signin" title="Sign in" color="white" />
              </MenuItem>
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
            </Box>
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
                <Link url="/cabinet/profile" title="My Profile" color="#212121" />
              </MenuItem>
              <MenuItem onClick={signOut}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}

      </Toolbar>
    </AppBar >
  );
}

