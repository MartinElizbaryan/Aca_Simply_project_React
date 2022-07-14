import logo from "../../../assets/logo.png"
import blackLogo from "../../../assets/blackLogo.png"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"
import { Box } from "@mui/material"

export function Logo({ black }) {
  return (
    <Box
      sx={{
        "& img": {
          width: {
            xs: "100px",
            sm: "120px",
          },
        },
      }}
    >
      {black ? (
        <Link to="/" component={RouterLink}>
          <img src={blackLogo} alt="Logo" />
        </Link>
      ) : (
        <Link to="/" component={RouterLink}>
          <img src={logo} alt="Logo" />
        </Link>
      )}
    </Box>
  )
}
