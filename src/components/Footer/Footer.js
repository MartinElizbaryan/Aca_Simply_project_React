import React, { useState } from "react"
import logo from "../../assets/logo-white.svg"
import {
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import { CustomLink as Link } from "../Shared/CustomLink/CustomLink"
import { colors } from "../../constants/styles"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import i18n from "../../i18n/languages/translations/translations"

export default function Footer() {
  const { t } = useTranslation()
  const classes = useStyles()
  const [language, setLanguage] = useState(localStorage.getItem("language"))

  const handleChange = (event) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
    localStorage.setItem("language", event.target.value)
    console.log(event.target.value)
  }

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
              {t("Follow_us")}
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
          <Box sx={{ minWidth: 120 }}>
            <Select value={language} onChange={handleChange}>
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"ru"}>Russian</MenuItem>
              <MenuItem value={"am"}>Armenian</MenuItem>
            </Select>
          </Box>
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
          <Link url="/faq" content="FAQ" color={colors.white} variant="caption" />
          {/*<Divider orientation="vertical" flexItem />*/}
          <Link
            url="/terms-conditions"
            content="Terms and Conditions"
            color={colors.white}
            variant="caption"
          />
          {/*<Divider orientation="vertical" flexItem />*/}
          <Link url="/privacy" content="Privacy Policy" color={colors.white} variant="caption" />
        </Stack>
      </Container>
    </footer>
  )
}
