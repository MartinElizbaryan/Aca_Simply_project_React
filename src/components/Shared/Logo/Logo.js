import logo from "../../../assets/logo.png";
import useStyles from "./style";
import { Link as RouterLink } from 'react-router-dom'
import Link from "@mui/material/Link"

export function Logo() {
    const classes = useStyles();
    return (
        <div className={classes.logo} >
            <Link to='/' component={RouterLink}>
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}