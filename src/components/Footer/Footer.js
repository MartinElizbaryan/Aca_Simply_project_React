import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Box,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material"
import { AM, GB, RU } from "country-flag-icons/react/3x2"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import logo from "../../assets/logo-white.svg"
import i18n from "../../i18n/languages/translations/translations"
import useStyles from "./styles"
import { colors } from "../../constants/styles"
import { setThemeMode } from "../../redux/themeSlice"
import { useDispatch, useSelector } from "react-redux"
import { getThemeMode } from "../../redux/themeSelectors"

export default function Footer() {
  const { t } = useTranslation()
  const themeMode = useSelector(getThemeMode)
  const classes = useStyles()
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en")
  const dispatch = useDispatch()
  const theme = useTheme()
  const handleChange = (event) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
    localStorage.setItem("language", event.target.value)
  }
  const [defaultChecked, setDefaultChecked] = useState((initialState) => {
    if (localStorage.getItem("theme") === "light") {
      return (initialState = false)
    }
    return (initialState = true)
  })
  const changeThemeMode = () => {
    if (themeMode === "light") {
      dispatch(setThemeMode("dark"))
      localStorage.setItem("theme", "dark")
      setDefaultChecked(true)
    } else {
      dispatch(setThemeMode("light"))
      localStorage.setItem("theme", "light")
      setDefaultChecked(false)
    }
  }
  return (
    <footer>
      <Container
        maxWidth={false}
        className={classes.container}
        sx={{
          backgroundColor: theme.palette.blurBlue.main,
        }}
      >
        <Grid container justifyContent="space-around">
          <Stack spacing={1} justifyContent="center" alignItems="center" textAlign="center">
            <img src={logo} alt="logo" width={150} />
            <Typography variant="caption" color={colors.white}>
              &copy; 2022 JE&JE, {t("rights")}
            </Typography>
          </Stack>
          <Stack spacing={1} m={1} pt={1} alignItems="center">
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
          <Box className={classes.languagesBox}>
            <Grid container>
              <Grid item xs={12}>
                <Select
                  value={language}
                  onChange={handleChange}
                  className={classes.languagesSelect}
                >
                  <MenuItem value={"am"}>
                    <AM />
                  </MenuItem>
                  <MenuItem value={"ru"}>
                    <RU />
                  </MenuItem>
                  <MenuItem value={"en"}>
                    <GB />
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked={defaultChecked} onClick={changeThemeMode} />}
                    label="Dark Mode"
                    sx={{
                      color: "#ffffff",
                    }}
                  />
                </FormGroup>
              </Grid>
            </Grid>
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
          <Link url="/faq" color={colors.white} variant="caption">
            {t("FAQ")}
          </Link>
          <Link url="/terms" color={colors.white} variant="caption">
            {t("terms")}
          </Link>
          <Link url="/privacy" color={colors.white} variant="caption">
            {t("privacy")}
          </Link>
        </Stack>
      </Container>
    </footer>
  )
}
