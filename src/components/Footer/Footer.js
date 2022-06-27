import logo from "../../assets/logo-white.svg"
import { Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { colors } from "../../constants/styles"
import useStyles from "./styles"

export default function Footer() {
  const classes = useStyles()

  return (
    <footer>
      <Container maxWidth={false} className={classes.container}>
        <Grid container justifyContent="space-around" p={2}>
          <Stack spacing={1} justifyContent="center" alignItems="center" textAlign="center">
            <img src={logo} alt="logo" width={150} />
            <Typography variant="caption" color={colors.white}>
              &copy; 2022 JE&JE, Inc. All rights reserved.
            </Typography>
          </Stack>
          <Stack spacing={1} m={1} alignItems="center">
            <Typography variant="body2" color={colors.white}>
              Follow us
            </Typography>
            <Divider flexItem sx={{ bgcolor: "white" }} />
            <Grid container justifyContent="center">
              <IconButton>
                <FacebookIcon fontSize="medium" color="inherit" />
              </IconButton>
              <IconButton>
                <LinkedInIcon fontSize="medium" color="inherit" />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="medium" color="inherit" />
              </IconButton>
              <IconButton>
                <TwitterIcon fontSize="medium" color="inherit" />
              </IconButton>
            </Grid>
          </Stack>
        </Grid>
        <Divider />
        <Stack
          direction="row"
          spacing={4}
          p={1}
          justifyContent="center"
          textAlign="center"
          alignItems="center"
        >
          <Link url="/faq" title="FAQ" color={colors.white} variant="caption" />
          {/*<Divider orientation="vertical" flexItem />*/}
          <Link url="/terms" title="Terms and Conditions" color={colors.white} variant="caption" />
          {/*<Divider orientation="vertical" flexItem />*/}
          <Link url="/policy" title="Privacy Policy" color={colors.white} variant="caption" />
        </Stack>
      </Container>
    </footer>
  )
}
