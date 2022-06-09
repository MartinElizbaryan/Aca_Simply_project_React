import { styled, Toolbar } from "@mui/material";
import useStyles from "./styles"
import AppColors from "../../Constants/ConstantColors/AppColors.js";
import logo from "../../Assets/logo.png";
import Link from "@mui/material/Link"
export const NavToolbar = styled(Toolbar)({
  backgroundColor: AppColors.blue,
  display: 'flex',
  justifyContent: 'space-between',
})
export function Logo() {
  const classes = useStyles()
  return (
    <img src={logo} alt="" className={classes.logo} />
  )
}
export const NavLink = styled(Link)({
  textDecoration: 'none',
  color: AppColors.white
})