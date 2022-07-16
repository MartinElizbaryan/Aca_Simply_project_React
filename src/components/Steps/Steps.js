import { Container, Grid, Typography, Box } from "@mui/material"
import useStyles from "./styles"
import { PersonAdd, Check, PostAdd } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

export default function TeamSlider() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Container size="md">
      <Typography className={classes.bigText}>{t("How_to_post")}</Typography>
      <Grid
        container
        rirection="row"
        justifyContent="center"
        spacing={3}
        mb={2}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Grid item xs={12} sm={4} className={classes.gridStyle}>
          <Box className={classes.center}>
            <Box className={classes.circle}>
              <PersonAdd fontSize="large" style={{ color: "white" }} />
            </Box>
            <Typography className={classes.bigText2}>{t("Step1")}</Typography>
            <Typography className={classes.lightGreyText}>{t("Step1_text")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.gridStyle}>
          <Box className={classes.center}>
            <Box className={classes.circle}>
              <Check fontSize="large" style={{ color: "white" }} />
            </Box>
            <Typography className={classes.bigText2}>{t("Step2")}</Typography>
            <Typography className={classes.lightGreyText}>{t("Step2_text")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.gridStyle}>
          <Box className={classes.center}>
            <Box className={classes.circle}>
              <PostAdd fontSize="large" style={{ color: "white" }} />
            </Box>
            <Typography className={classes.bigText2}>{t("Step3")}</Typography>
            <Typography className={classes.lightGreyText}>{t("Step3_text")}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
