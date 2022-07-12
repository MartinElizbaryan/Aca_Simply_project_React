import { useState } from "react"
import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Image,
  ImageList,
  ImageListItem,
} from "@mui/material"
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
        <Typography variant="h4" className={classes.header}>
          App MonsterZ
        </Typography>
        <Box>
          <Typography className={classes.contant}>{t("inspire_Header")}</Typography>
          <Typography className={classes.miniText2}>
            &quot; {t("inspire_Text1")} <br></br> {t("inspire_Text2")} &quot;
          </Typography>
        </Box>
      </Box>
      <Typography className={classes.contant}>{t("who_we_are")}</Typography>
      <Typography className={classes.miniText}>
        {`
        Meet us! The team of creatively developers. It takes extraordinary leadership to assemble great teams. We don't have a team lead but we manage everything for the most part. As a team we understand the importance for technical tasks like e.g. performance, security and scalability.
        `}
      </Typography>

      <Box sx={{ width: "100%", height: "100%" }}>
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
      </Box>
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
