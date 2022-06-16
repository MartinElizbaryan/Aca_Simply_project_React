import logo from "../../../assets/logo.png";
import blackLogo from "../../../assets/blackLogo.png"
import useStyles from "./style";
import { Link as RouterLink } from 'react-router-dom'
import Link from "@mui/material/Link"

export function Logo({ black }) {
    const classes = useStyles();
    return (
        <div className={classes.logo} >
            {black ?
                <Link to='/' component={RouterLink}>
                    <img src={blackLogo} alt="" />
                </Link>
                : <Link to='/' component={RouterLink}>
                    <img src={logo} alt="" />
                </Link>}
        </div>
    )
}