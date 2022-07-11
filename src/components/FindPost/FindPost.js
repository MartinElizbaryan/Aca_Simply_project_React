import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Container, Grid, MenuItem, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { GreenButton } from "../Shared/Buttons/GreenButton/GreenButton"
import { WhiteInput } from "../Shared/Inputs/Input"
import { colors } from "../../constants/styles"
import useStyles from "./style"
import { useTranslation } from "react-i18next"

export default function FindPost() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const [type, setType] = useState("LOST")
  const navigate = useNavigate()

  const findPost = () => {
    navigate(`/posts?type=${type}&search=${searchQuery}`)
  }

  const classes = useStyles()
  return (
    <Box className={classes.BgImage}>
      <Container maxWidth="lg">
        <Box className={classes.homeContainer}>
          <Box textAlign="center">
            <Typography variant="h3" mb={2} color={colors.white}>
              {t("Have_lost")}
            </Typography>
            <Typography variant="p" color={colors.white}>
              {t("Find_item")}
            </Typography>
            <Grid container spacing={2} mt={2} alignItems="center">
              <Grid item xs={12} sm={6} md={6}>
                <WhiteInput
                  label={t("Name_Desc")}
                  variant="filled"
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <WhiteInput
                  select
                  label={t("Type")}
                  variant="filled"
                  size="small"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={"LOST"}>{t("Lost")}</MenuItem>
                  <MenuItem value={"FOUND"}>{t("Found")}</MenuItem>
                </WhiteInput>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <GreenButton size="large" onClick={findPost}>
                  <SearchIcon sx={{ paddingRight: 1 }} />
                  {t("Find_post")}
                </GreenButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
