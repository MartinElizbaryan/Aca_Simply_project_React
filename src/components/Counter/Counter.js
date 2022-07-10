import useStyles from "./style"
import CountUp from "react-countup"
import { Box, Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

export default function Counter() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Box className={classes.counterBox} pt={10} pb={10}>
      <Container size="md" className={classes.counterContainer}>
        <Typography variant="h4" component="h2" textAlign="center">
          {t("Lose_Search_Find")}
        </Typography>
        <Typography variant="p" component="p" textAlign="center">
          {t("Anytime_Anyplace_Anywhere")}
        </Typography>
        <Grid container justifyContent="center" spacing={2} mt={5}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" component="p" textAlign="center">
              <CountUp end={1542} duration={2.75} />
            </Typography>
            <Typography variant="h6" component="p" textAlign="center">
              {t("Users")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" component="p" textAlign="center">
              <CountUp end={1214} duration={2.75} />
            </Typography>
            <Typography variant="h6" component="p" textAlign="center">
              {t("Posts")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" component="p" textAlign="center">
              <CountUp end={841} duration={2.75} />
            </Typography>
            <Typography variant="h6" component="p" textAlign="center">
              {t("Found_items")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
