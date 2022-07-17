import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import {
  Box,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import { AM, GB, RU } from "country-flag-icons/react/3x2"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import ThemeSwitch from "../Shared/Inputs/ThemeSwitch/ThemeSwitch"
import { CustomLink as Link } from "../Shared/Links/CustomLink/CustomLink"
import logo from "../../assets/logo-white.svg"
import i18n from "../../i18n/languages/translations/translations"
import { setThemeMode } from "../../redux/themeSlice"
import { getThemeMode } from "../../redux/themeSelectors"
import { colors } from "../../constants/styles"
import useStyles from "./styles"

export default function Footer() {
  const themeMode = useSelector(getThemeMode)
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en")
  const [checkedMode, setCheckedMode] = useState((initialState) => {
    if (themeMode === "light") return (initialState = true)
    return (initialState = false)
  })
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const theme = useTheme()
  const classes = useStyles()

  const handleChange = (event) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
    localStorage.setItem("language", event.target.value)
  }
  const changeThemeMode = (e) => {
    if (e.target.checked) {
      dispatch(setThemeMode("light"))
      localStorage.setItem("theme", "light")
      setCheckedMode(true)
    } else {
      dispatch(setThemeMode("dark"))
      localStorage.setItem("theme", "dark")
      setCheckedMode(false)
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
          <Box className={classes.inputsBox}>
            <Select value={language} onChange={handleChange} className={classes.languagesSelect}>
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
            <FormControlLabel
              sx={{ marginRight: 0 }}
              control={<ThemeSwitch onClick={changeThemeMode} checked={checkedMode} />}
            />
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
