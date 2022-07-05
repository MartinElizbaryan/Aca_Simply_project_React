import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Badge, ListItemIcon, Menu, MenuItem } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
import LogoutIcon from "@mui/icons-material/Logout"
import PersonIcon from "@mui/icons-material/Person"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { signOut } from "../Header/utils"
import { deleteUserInfo } from "../../redux/userSlice"
import { getUserInfo } from "../../redux/userSelectors"
import { TransparentButton } from "../Shared/Buttons/TransparentButton/TransparentButton"

export default function UserControlBlock({ onLeft = false }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const user = useSelector(getUserInfo)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleSignOutClick = async () => {
    setAnchorEl(null)
    const status = await signOut()
    if (status === 204) {
      dispatch(deleteUserInfo())
      navigate("/signin")
    }
  }

  return (
    <>
      <Link
        url="/chat"
        content={
          <TransparentButton
            icon={
              <Badge badgeContent={0} color="primary">
                <MailIcon />
              </Badge>
            }
          />
        }
        color="white"
        sx={{ display: "flex" }}
      />
      {/*{messageCount}*/}
      <TransparentButton icon={<AccountCircle />} title={user.name} onClick={handleMenu} />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
      >
        <MenuItem>
          <Link
            url="/profile"
            content={
              <>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                My Profile
              </>
            }
            color="#212121"
            sx={{ display: "flex" }}
          />
        </MenuItem>
        <MenuItem onClick={handleSignOutClick}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}
