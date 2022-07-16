import { Container, Grid, Typography, Box, ImageList, ImageListItem } from "@mui/material"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import Artyom from "../../assets/AboutUsPhotos/Artyom.jpg"
import Ani from "../../assets/AboutUsPhotos/Ani.jpg"
import Martin from "../../assets/AboutUsPhotos/Martin.jpg"
import Anahit from "../../assets/AboutUsPhotos/Anahit.jpg"
import us1 from "../../assets/AboutUsPhotos/us1.jpg"
import us2 from "../../assets/AboutUsPhotos/us2.jpg"
import us3 from "../../assets/AboutUsPhotos/us3.jpg"
import us4 from "../../assets/AboutUsPhotos/us4.jpg"

export default function AboutUs() {
  const { t } = useTranslation()

  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth={false}>
      <Box className={classes.box}>
        <Box mr={3}>
          <Typography variant="h4" className={classes.header}>
            App MonsterZ
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.contant}>{t("inspire_Header")}</Typography>
          <Typography className={classes.miniText2}>&quot; {t("inspire_Text1")} &quot;</Typography>
        </Box>
      </Box>
      <Grid
        container
        rirection="row"
        justifyContent="center"
        spacing={3}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography className={classes.contant}>{t("who_we_are")}</Typography>
          <Typography className={classes.miniText}>
            {t("meet_us")}
            <br></br>
            <br></br>
            {t("last_line")}
          </Typography>
        </Grid>

        <Grid item sx={{ height: "100%" }} xs={12} sm={8}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Container>
  )
}

const itemData = [
  {
    img: Ani,
    title: "Ani",
  },
  {
    img: us1,
    title: "",
  },
  {
    img: Anahit,
    title: "Anahit",
  },
  {
    img: us2,
    title: "Anahit",
  },
  {
    img: us4,
    title: "Anahit",
  },
  {
    img: Martin,
    title: "Martin",
  },
  {
    img: us3,
    title: "Anahit",
  },
  {
    img: Artyom,
    title: "Artyom",
  },
]
